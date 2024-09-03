// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    { "number": 1, "message": "앤톤을 좋아하게 된 계기" },
    { "number": 2, "message": "제일 처음 저장한 앤톤 사진" },
    { "number": 3, "message": "최근에 저장한 앤톤 사진" },
    { "number": 4, "message": "제일 좋아하는 앤톤 셀카" },
    { "number": 5, "message": "제일 좋아하는 앤톤 남찍사" },
    { "number": 6, "message": "제일 좋아하는 앤톤 착장" },
    { "number": 7, "message": "제일 좋아하는 앤톤 무대" },
    { "number": 8, "message": "찬영이의 매력포인트는?" },
    { "number": 9, "message": "찬영이의 첫인상과 현인상" },
    { "number": 10, "message": "제일 좋아하는 찬영이 움짤" },
    { "number": 11, "message": "찬영이가 해줬으면 하는 스타일링" },
    { "number": 12, "message": "찬영이가 불러줬으면 하는 노래" },
    { "number": 13, "message": "찬영이로 보고싶은 콘첸츠" },
    { "number": 14, "message": "제일 좋아하는 앤톤 챌린지" },
    { "number": 15, "message": "가장 기억에 남는 찬영이 위버스" },
    { "number": 16, "message": "찬영이한테 추천해주고 싶은 노래" },
    { "number": 17, "message": "찬영이한테 추천해주고 싶은 드라마 or 영화" },
    { "number": 18, "message": "찬영이에게 추천 or 소개하고 싶은 장소" },
    { "number": 19, "message": "찬영이에게 추천해주고 싶은 음식 or 맛집" },
    { "number": 20, "message": "앤톤하면 떠오르는 계절" },
    { "number": 21, "message": "앤톤하면 떠오르는 꽃" },
    { "number": 22, "message": "앤톤하면 떠오르는 색" },
    { "number": 23, "message": "하루 중 찬영이가 가장 생각나는 시간" },
    { "number": 24, "message": "찬영이에게 선물을 해줄 수 있다면" },
    { "number": 25, "message": "찬영이에게 고마운 점" },
    { "number": 26, "message": "찬영이의 장점 3가지" },
    { "number": 27, "message": "찬영이를 좋아하면서 가장 행복했던 순간" },
    { "number": 28, "message": "찬영이를 한 문장으로 소개한다면" },
    { "number": 29, "message": "나에게 앤톤이란" },
    { "number": 30, "message": "찬영이에게 하고싶은 말" },
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
    door.addEventListener('click', () => {
        // 상위 div의 class 번호를 찾아서 image url에 사용합니다
        const imageUrl = `real.image/backton/backton${index + 1}.jfif`;

        // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
        const doorDiv = document.querySelector(`.day-${index + 1}`)
        const backDiv = doorDiv.querySelector(`.back`);

        const style = window.getComputedStyle(backDiv);
        const pTag = backDiv.querySelector('p')
        const text = modalMessageList[index]['message']

        // showModal 함수를 호출하여 모달을 표시합니다.
        showModal(imageUrl, text);
        // alert('이벤트 캘린더를 엽니다.');
    });
});
