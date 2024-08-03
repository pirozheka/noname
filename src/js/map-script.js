const tooltip = document.getElementById('tooltip');
        const regions = document.querySelectorAll('.map-dist');

        regions.forEach(region => {
            region.addEventListener('mouseover', function(event) {
                const regionName = getRegionName(region.id); // Получаем имя региона
                tooltip.innerHTML = regionName;
                tooltip.style.display = 'block';
                
                // Получаем координаты региона
                const rect = region.getBoundingClientRect();
                const svgRect = region.ownerSVGElement.getBoundingClientRect();
                
                // Определяем положение tooltip над регионом
                const tooltipX = rect.right - svgRect.left;
                const tooltipY = rect.bottom - (svgRect.top*1.5); // 10px выше региона

                tooltip.style.left = `${tooltipX}px`;
                tooltip.style.top = `${tooltipY}px`;
            });

            region.addEventListener('mouseout', function() {
                tooltip.style.display = 'none';
            });
        });

        function getRegionName(regionId) {
            const names = {
                'ZAP': 'Западно-Казахстанская область',
                'ATY': 'Атырауская область',
                'MAN': 'Мангистауская область',
                'AKT': 'Актюбинская область',
                'KZY': 'Кызылординская область',
                'KUS': 'Костанайская область',
                'KAR': 'Карагандинская область',
                'SEV': 'Северо-Казахстанская область',
                'AKM': 'Акмолинская область',
                'YUZ': 'Южно-Казахстанская область',
                'ZHA': 'Жамбыльская область',
                'PAV': 'Павлодарская область',
                'VOS': 'Восточно-Казахстанская область',
                'ALM': 'Алматинская область',
                // Добавьте остальные регионы
            };
            return names[regionId] || 'Неизвестный регион';
        }