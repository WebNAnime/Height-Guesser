alert("Hello,\n Through this webpage You can Know What will be your age When You will adult . 👨🏻 👩🏻")
alert("This webpage can measure The age of child between 8 and 18 👦🏻 👧🏻")
$(document).ready(function () {
    $("#check").click(function () {
        let age = document.getElementById("inpAge").value;
        let height = document.getElementById("inpHei").value;
        let gender = document.getElementById("drp");

        age = Number(age)
        // alert(typeof (age))

        if (gender.value == 1 && age === 8) {
            let a = gender.value = (height / 72) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 9) {
            let a = gender.value = (height / 75) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 78) {
            let a = gender.value = (height / 75) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 81) {
            let a = gender.value = (height / 75) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 84) {
            let a = gender.value = (height / 75) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 13) {
            let a = gender.value = (height / 88) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 14) {
            let a = gender.value = (height / 92) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 15) {
            let a = gender.value = (height / 95) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 16) {
            let a = gender.value = (height / 98) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 1 && age === 17) {
            let a = gender.value = (height / 99) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }








        //Female








        else if (gender.value == 1 && age === 18) {
            let a = gender.value = (height / 100) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 8) {
            let a = gender.value = (height / 77) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 9) {
            let a = gender.value = (height / 81) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 10) {
            let a = gender.value = (height / 84) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 11) {
            let a = gender.value = (height / 88) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 12) {
            let a = gender.value = (height / 91) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 13) {
            let a = gender.value = (height / 95) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 14) {
            let a = gender.value = (height / 98) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 15) {
            let a = gender.value = (height / 99) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 16) {
            let a = gender.value = (height / 99.5) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 17) {
            let a = gender.value = (height / 100) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else if (gender.value == 2 && age === 18) {
            let a = gender.value = (height / 100) * 100;
            alert(parseFloat(a).toFixed(2) + " cm")
        }
        else {
            alert("You can use the value of age between 8 and 18 ⚠")
        }
    })
});