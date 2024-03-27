var cardValentine = document.querySelector(".cardValentine");
var letterContent = "Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anh và anh có những điều muốn gởi gắm đến tình iu của anhh❤️. Cảm ơn em đã đến bên anhh những lúc anh cô đơn buồn tủi nhất.Cuộc sống thực sự chẳng có ý nghĩa gì nếu không có em. Em làm cho anh luôn cảm thấy đặc biệt và hoàn hảo. Anh chẳng biết nói gì ngoài lời cảm ơn em, anh rất yêu em💕 ";
var durationWrite = 50; // Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
var isWriting = false; // Biến kiểm tra xem hiệu ứng viết chữ đang chạy hay không

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    var letterContentSplited = letterContent.split("");
    isWriting = true;
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
            // Nếu việc viết chữ đã hoàn thành
            if (index === letterContentSplited.length - 1) {
                isWriting = false;
            }
        }, durationWrite * index);
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
    document.querySelector(".letterContent").innerHTML = "";
    // Nếu hiệu ứng viết chữ đang chạy khi click để mở
    if (!isWriting) {
        // Xóa nội dung hiện tại của letterContent
        document.querySelector(".letterContent").innerHTML = "";
        setTimeout(effectWrite, 500);
    }
});

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");
    // Nếu click để đóng và hiệu ứng viết chữ đang chạy
    if (!cardValentine.classList.contains("open") && isWriting) {
        // Kết thúc hiệu ứng viết chữ
        isWriting = false;
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 500);
    }
});
