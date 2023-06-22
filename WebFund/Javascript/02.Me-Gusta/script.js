var likes = [9, 12, 9]; // Arreglo para almacenar los likes de cada botón

function incrementarLikes(index) {
    likes[index - 1]++;
    document.getElementById('likeCount' + index).innerText = likes[index - 1];
}


