// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// for opening/closing modal
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('open-modal');
});
closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
});

// for going to next/prev modal
const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
const modals = [
    {
        modal: "modal #1",
        modalContent: "modal content #1"
    },
    {
        modal: "modal #2",
        modalContent: "modal content #2"
    },
    {
        modal: "modal #3",
        modalContent: "modal content #3"
    },
    {
        modal: "modal #4",
        modalContent: "modal content #4"
    },
    {
        modal: "modal #5",
        modalContent: "modal content #5"
    },
    {
        modal: "modal #6",
        modalContent: "modal content #6"
    }
];

// change text content by clicking leftBtn or rightBtn
let modalHdr = document.querySelector('.modal-hdr');
let modalContentHdr = document.querySelector('.modal-content-hdr');

let modalNum = 0;
function goRight() {
    modalNum++;
    if (modalNum > modals.length - 1) {
        modalNum = 0;
    }
    console.log(modalNum);
}
function goLeft() {
    modalNum--;
    if (modalNum < 0) {
        modalNum = modals.length - 1;
    }
    console.log(modalNum);
}

rightBtn.addEventListener('click', function() {
    goRight();
    modalHdr.textContent = modals[modalNum].modal;
    modalContentHdr.textContent = modals[modalNum].modalContent;
});
leftBtn.addEventListener('click', function() {
    goLeft();
    modalHdr.textContent = modals[modalNum].modal;
    modalContentHdr.textContent = modals[modalNum].modalContent;
});