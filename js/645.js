
        // 1. 하위 옵션 데이터를 정의합니다.
        const optionsData = {
            fruit: ['사과', '바나나', '딸기', '포도'],
            vegetable: ['상추', '양파', '감자', '오이'],
            meat: ['소고기', '돼지고기', '닭고기']
        };

        // 2. 상위 select 박스의 변경 이벤트가 발생했을 때 실행될 함수입니다.
        function updateSubCategory() {
            // 상위 select와 하위 select 요소를 가져옵니다.
            const mainSelect = document.getElementById('mainCategory');
            const subSelect = document.getElementById('subCategory');

            // 현재 선택된 대분류의 '값(value)'을 가져옵니다 (예: 'fruit')
            const selectedCategory = mainSelect.value;

            // 하위 select의 기존 옵션들을 모두 제거합니다.
            subSelect.innerHTML = '<option value="">-- 소분류 선택 --</option>';

            // 만약 유효한 대분류가 선택되었다면, 하위 옵션들을 추가합니다.
            if (selectedCategory && optionsData[selectedCategory]) {
                const subOptions = optionsData[selectedCategory];

                // 선택된 카테고리에 해당하는 배열을 반복하며 option 요소를 생성합니다.
                subOptions.forEach(optionText => {
                    const newOption = document.createElement('option');
                    newOption.value = optionText; // 값 설정 (필요시 별도 ID로 변경 가능)
                    newOption.textContent = optionText; // 화면에 보이는 텍스트 설정
                    subSelect.appendChild(newOption);
                });
            }
        }
