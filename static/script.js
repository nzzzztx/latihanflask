// $(document).ready(function () {
//     $("#calculate_api").click(function () {
//         let number1 = $("#number1").val();
//         let number2 = $("#number2").val();
//         $.post("/calculate_api", { number1: number1, number2: number2 }, function (data) {
//             $("#api_result").text(data.result);
//             $("#result_api").show();
//         });
//     });

//     $("#calculate_jquery").click(function () {
//         let number1 = parseFloat($("#number1").val());
//         let number2 = parseFloat($("#number2").val());
//         let result = number1 + number2;
//         $("#jquery_result").text(result);
//         $("#result_jquery").show();
//     });
// });

function sum() {
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let result = parseInt(num1) + parseInt(num2);
    alert(result);
}

function sum_api(){
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();

    $.ajax({
        type: 'POST',
        url: '/sum',
        data: {
            'num1': num1,
            'num2': num2
        },
        success: function(response){
            alert(response, result);

        }
    });
}