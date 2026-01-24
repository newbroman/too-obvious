/**
 * audio.js - Cross-Browser Speech Engine
 */

let polishVoice = null;
let fallbackVoice = null;
let audioUnlocked = false;

// CRITICAL FOR MOBILE/FIREFOX/DDG: Prevents garbage collection
window.activeUtterance = null; 

/**
 * Finds the best Polish voice available.
 */
function findVoice() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    
    // Try to find Polish voice
    polishVoice = voices.find(v => v.lang === 'pl-PL' || v.lang === 'pl_PL' || v.lang.startsWith('pl'));
    
    // Fallback to any available voice
    if (!polishVoice && voices.length > 0) {
        fallbackVoice = voices[0];
        console.warn('⚠️ No Polish voice found. Using fallback:', fallbackVoice.name, fallbackVoice.lang);
    }
}

export function loadVoices() {
    findVoice();
}

// Ensure voices are detected when they check in
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
}

/**
 * Initialization check used by app.js
 */
export function checkVoices(onReady) {
    if (!('speechSynthesis' in window)) return;
    
    const runCheck = () => {
        findVoice();
        // Ready if we have either Polish or fallback voice
        if (onReady) onReady(!!(polishVoice || fallbackVoice));
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        runCheck();
    } else {
        window.speechSynthesis.onvoiceschanged = runCheck;
    }

    // Backup check for slower mobile browsers
    setTimeout(runCheck, 1000);
}

/**
 * ESSENTIAL FOR MOBILE: Un-mutes the engine.
 * Must be called from a user click/touchstart.
 */
export function unlockAudio() {
    try {
        const talk = new SpeechSynthesisUtterance("");
        talk.volume = 0; 
        window.speechSynthesis.speak(talk);
        audioUnlocked = true;
        console.log("🔊 Audio engine primed.");
    } catch (e) {
        console.error("Audio unlock failed", e);
    }
}

/**
 * The Main Speak Function - Exported for events.js
 */
export function speakText(text, speed = 0.85) {
    if (!text || !('speechSynthesis' in window)) return;

    // 1. Force Resume & Clear Queue (Fixes Opera/Firefox hang)
    window.speechSynthesis.resume();
    window.speechSynthesis.cancel();

    // 2. Attach to window to prevent sound cutting off mid-sentence
    window.activeUtterance = new SpeechSynthesisUtterance(text);
    
    // 3. Set Language and Voice
    window.activeUtterance.lang = 'pl-PL';
    if (polishVoice) {
        window.activeUtterance.voice = polishVoice;
        console.log('🗣️ Using Polish voice:', polishVoice.name);
    } else if (fallbackVoice) {
        window.activeUtterance.voice = fallbackVoice;
        console.log('🗣️ Using fallback voice:', fallbackVoice.name);
    } else {
        console.warn('⚠️ No voice available - attempting default');
    }

    // 4. Learner-friendly settings with variable speed
    window.activeUtterance.rate = speed;
    window.activeUtterance.pitch = 1.0;
    window.activeUtterance.volume = 1.0; // Ensure full volume

    // 5. Speak (with a tiny delay to ensure cancel() finished)
    setTimeout(() => {
        console.log('🔊 Speaking:', text.substring(0, 50) + '...');
        window.speechSynthesis.speak(window.activeUtterance);
    }, 50);
}
