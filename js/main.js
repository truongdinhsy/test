var arrayA = [0, 2, 1, 4, 3]; // Mảng chưa các giá trị sắp xếp
var arrayB = ["C", "A", "D", "B", "E"]; // Mảng cần sắp xếp

// Tạo một mảng tạm thời chứa cặp giá trị của A và B
var tempArray = arrayA.map(function (value, index) {
    return { A: value, B: arrayB[index] };
});

// Sắp xếp mảng tạm thời dựa trên giá trị của A
tempArray.sort(function (a, b) {
    return a.A - b.A;
});

// Cập nhật mảng B theo thứ tự sắp xếp của mảng tạm thời
arrayB = tempArray.map(function (item) {
    return item.B;
});

// Hiển thị mảng B sau khi đã sắp xếp
console.log(arrayB);


