
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


function changeDepth1() {

    depth2Range = [[1, 100], [101, 200], [201, 300], [301,400], [401,500],
                [501,600], [601, 700], [701, 800], [801,900], [901,1000],
                [1001,1100], [1101, 1200], [1201, 1202]];

    var depth1Select = document.getElementById("depth1");
    var depth2Select = document.getElementById("depth2");

    depth2Select.innerHTML = '';

    var depth1Value = depth1Select[depth1Select.selectedIndex].value;    

    for (let i=depth2Range[depth1Value][1] ; i>= depth2Range[depth1Value][0] ; i--) {
        depth2Select.add(new Option(i+"회", i));
    }
}

var dataSet = [];

for (let i=1 ; i<=1201 ; i++) {
    dataSet.push([i, i+" 회"]);
}

new DataTable('#example', {
    columns: [
        { title: '게임 회차' },
        { title: '회차 바로가기',
            render: function (data, type, row, meta) {
                //if (type === 'display') {
                    // 'data' is the value of the current cell
                    // 'row' is the full data object for the current row
                    return '<a href="https://lottokay.com/lotto/game/' + row[0] + '">' + '바로가기' + '</a>';
                //}
                //return data;
            }
        }
    ],
    columnDefs: [{
        target: [0,1],
        className: "dt-center"
    }],
    order: [[1,'desc']],
    lengthChange: false,
    data: dataSet
});
