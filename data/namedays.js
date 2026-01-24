(function() {
    let namedaysData = null;

    async function loadNamedaysData() {
        if (!namedaysData) {
            try {
                const response = await fetch('./namedays.json');
                namedaysData = await response.json();
                console.log('Namedays data loaded, sample keys:', Object.keys(namedaysData).slice(0, 5));
            } catch (error) {
                console.error('Error loading namedays data:', error);
                namedaysData = {};
            }
        }
        return namedaysData;
    }

    window.getNamesForDate = async function(date) {
        const data = await loadNamedaysData();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dateKey = `${day}-${month}`;
        const names = data[dateKey] || [];
        console.log(`getNamesForDate called: ${date.toDateString()} -> key: ${dateKey} -> found ${names.length} names`, names);
        return names;
    };

    // Reverse lookup: find all dates for a given name
    window.searchNameDays = async function(searchName) {
        const data = await loadNamedaysData();
        const results = [];
        const normalizedSearch = searchName.trim().toLowerCase();
        
        if (!normalizedSearch) {
            return results;
        }
        
        // Search through all dates
        for (const [dateKey, names] of Object.entries(data)) {
            // Check if any name matches (case-insensitive)
            const matchingNames = names.filter(name => 
                name.toLowerCase().includes(normalizedSearch)
            );
            
            if (matchingNames.length > 0) {
                // Parse date key (DD-MM format)
                const [day, month] = dateKey.split('-');
                results.push({
                    dateKey: dateKey,
                    day: parseInt(day),
                    month: parseInt(month),
                    matchingNames: matchingNames
                });
            }
        }
        
        // Sort by month, then by day
        results.sort((a, b) => {
            if (a.month !== b.month) return a.month - b.month;
            return a.day - b.day;
        });
        
        console.log(`searchNameDays: "${searchName}" -> found ${results.length} dates`);
        return results;
    };
})();
