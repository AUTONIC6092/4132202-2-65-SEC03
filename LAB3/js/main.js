
    // alert("Hello Js!!!");
    var num = 10;
    let name = "AUTO";
    const arr = [10, 20, "Hi"];
    let obj = { name: "Dang", age: [20] };
    const objMix = {
        data: [
            { name: "Dum", gpa: 4.00 },
            { name: "Dang", age: 18, gpa: 4.00 }
        ],
    };

    console.log(num);
    console.log(arr[2]);
    console.log(objMix.data[1].age);

    function add(a, b) {
        return a + b;
    }

    let total = add(3, 5);

    document.getElementById("div1").innerHTML = name;

    $(function () {
        // alert("Hello jQuery");

        $("#btn1").click(function () {
            $("#div1").text("BRU");
        });

        $("#btn2").bind("click",()=>{
            $(".in1").val("BRU");
        });

        $("#btn3").click(()=>{
            $(".in1:even").toggleClass("red");
        });
        $("#div_form").load("./page/form.html");
    });//jQuery Handle

