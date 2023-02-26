const cakes = [
    {
        "id": 1,
        "productName": "Chocolate Cake",
        "price": 500,
        "image": "https://t4.ftcdn.net/jpg/02/52/80/65/360_F_252806534_HkpmruoDjSPwXx4X9y4Lht8WBmj9GfEN.jpg",
        "description": "This is chocolate cake",
    },
    {
        "id": 2,
        "productName": "Vanilla Cake",
        "price": 50,
        "image": "https://thumbs.dreamstime.com/b/vanilla-cake-white-background-isolated-106574623.jpg",
        "description": "This is vanilla cake",
    },
    {
        "id": 3,
        "productName": "Fruits Cake",
        "price": 300,
        "image": "https://thumbs.dreamstime.com/b/fruit-chocolate-birthday-cake-white-background-fruit-chocolate-birthday-cake-white-background-113735538.jpg",
        "description": "This is fruits cake",
    },
    {
        "id": 4,
        "productName": "Slice Cake",
        "price": 80,
        "image": "https://t3.ftcdn.net/jpg/02/39/96/96/360_F_239969643_nFlBVBJzBiI3KEgzkPiZY2GtIpUahwaK.jpg",
        "description": "This is slice cake",
    },
    {
        "id": 5,
        "productName": "Cup Cake",
        "price": 60,
        "image": "https://thumbs.dreamstime.com/b/delicious-red-velvet-cupcake-isolated-white-background-suitable-party-gift-delicious-red-velvet-cupcake-isolated-108355687.jpg",
        "description": "This is cup cake",
    },
    {
        "id": 6,
        "productName": "Chocolate Cup Cake",
        "price": 90,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_sD0j1QxYHL3fiwgQRPx5dRB-2EH7YBjSHPGcfrP&s",
        "description": "This is chocolate cup cake",
    },
    {
        "id": 7,
        "productName": "Sweet item",
        "price": 70,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3CIlIA43KPchCrI5sC-aIjduoPz0_JfjU32JHphq9i-y2iu0mfHQ0wQGUfskK3H4QRU&usqp=CAU",
        "description": "This is sweet cake",
    },
    {
        "id": 8,
        "productName": "Pineapple Cake",
        "price": 250,
        "image": "https://thumbs.dreamstime.com/b/delicious-pineapple-cake-isolated-white-background-delicious-pineapple-cake-isolated-white-background-137603372.jpg",
        "description": "This is pineapple cake",
    },
    {
        "id": 9,
        "productName": "biscuit Cake",
        "price": 100,
        "image": "https://thumbs.dreamstime.com/b/chocolate-biscuit-cake-white-cream-chocolate-biscuit-cake-white-cream-white-background-175296246.jpg",
        "description": "This is biscuit cake",
    },
    {
        "id": 10,
        "productName": "strawberry Cake",
        "price": 400,
        "image": "https://t3.ftcdn.net/jpg/00/29/26/78/360_F_29267816_9r6mEJzdEzwpRVcjKT5YpGqS0GNDApX9.jpg",
        "description": "This is strawberry cake",
    },
]

let blankArray = [];

function arrange_array(filtercakes) {
    document.getElementById("allitems").innerHTML = '';

    for (let index of filtercakes) {
        //create div
        let div = document.createElement("div");
        div.setAttribute('class', 'col-md-2  card mt-3 mb-3 mx-3  p-0');
        div.setAttribute('id', `${index.id}`);

        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", index.image);
        image.style.height = "200px";
        image.style.objectFit = "contain";
        div.appendChild(image);

        //card div
        let card = document.createElement("div");
        card.setAttribute("class", "card-body");

        //Add detail
        let cardText = document.createElement("h5");
        cardText.innerHTML = index.productName.toUpperCase();
        let itemPrice = document.createElement("h4");
        itemPrice.innerHTML = `₹ ${index.price}`;

        let cardFooter = document.createElement("div");
        cardFooter.setAttribute("class", "card-footer p-0");
        cardFooter.style.textAlign = "center";
        let input_text = document.createElement("input")
        input_text.setAttribute("type", "button");
        input_text.setAttribute("value", "Add To Cart");

        input_text.setAttribute("id", "addToCart");
        input_text.setAttribute("onclick", `insertcart(${index.id})`);


        input_text.style.width = "100%";
        cardFooter.appendChild(input_text);

        //Append all
        card.appendChild(cardText);
        card.appendChild(itemPrice);
        div.appendChild(card);
        div.appendChild(cardFooter);

        document.getElementById("allitems").appendChild(div);
    };
};

window.onload = () => {
    arrange_array(cakes);
};

//Insert cart
function insertcart(i) {


    var parent = document.getElementById(i);

    var addItems = cakes.find(cakeadd => cakeadd.id == parent.id);

    if (blankArray.find(cakeadd => cakeadd.id === addItems.id)) {
        swal("OOPS!", "You can not add item more than one", "error");
    }
    else {
        swal("Good job!", "Your item is successfully add to cart", "success");
        blankArray.push(addItems);
        productItem++;
        productTotal += addItems.price;
    }

    displayitems();
};

//Remove cart
function removeItems(i) {

    var element = document.getElementById(i);

    var findinblankArray = blankArray.find(cakeadd => cakeadd.id == element.id);

    var indexOfItems = blankArray.indexOf(findinblankArray);
    blankArray.splice(indexOfItems, 1);

    productItem--;
    productTotal -= findinblankArray.price;

    displayitems();
    swal("Done !", "Your item is successfully remove!", "success");

};

var productItem = 0;
var productTotal = 0;

//Display cart data
function displayitems() {
    document.getElementById('CartItems').innerHTML = '';
    for (let index of blankArray) {
        document.getElementById('CartItems').innerHTML += `
        <div class="row mb-5">
            <div id="${index.id}" class="col-lg-5 mx-auto"   style="display: flex; justify-content: space-between;">
            <span > <img src="${index.image}" alt="not found" class="avatar"> </span>
            <span class="my-auto">${index.description}</span>
            
            <span class="my-auto"> ₹ ${index.price}</span>
            <span class="my-auto"><input id="number"  min="0"  type="number"/></span>
            <span class="my-auto">
                <button id="removeItems" class="btn btn-danger"  onclick=(removeItems(${index.id}))> Remove </button>
            </span>
            </div>
        </div>
        `
    }
    document.getElementById('itemsCount').innerHTML = `${productItem} items -`;
    document.getElementById('itemTotal').innerHTML = `₹ ${productTotal}`;
};

// function number(){
//     console.log('hi')
//     // var x = `${index.price}`;
//     var y = $
//     var z=(y);
//     console.log(z);
// };

//Accept data
// let form=document.getElementById("form");
// let inputText = document.getElementById("inputText");
// let inputNumber = document.getElementById("inputNumber");
// let inputDescription = document.getElementById("inputDescription");
// let acceptData = () => {
//     cakes["productName"] = inputText.value;
//     cakes["Number"] = inputNumber.value;
//     console.log(cakes);
// };


$(document).ready(function () {
    $(".Cart").hide();
    $(".total").hide();
    $(".h1").hide();
    $(".cake").hide();
    $('.cartsection').hide();
    $('.yourcart').on('click', function () {
        $(".cake").hide();
        $(".Cart").show();
        $(".h1").show();
        $(".total").show();
        $('.cartsection').show();
    });

    $('#mylisting').on('click', function () {
        $(".cake").show();
        $(".Cart").hide();
        $(".h1").hide();
        $(".total").hide();
        $('.cartsection').hide();
    });

    $(document).on('change','#number', function()
    {
        console.log("ji")
        var x=$('#number').val();
        // for (let index of cakes) {
        //     var y = $(index.price)
            
        // }
        
        // console.log(y)
        var z = $('#itemTotal').val();
        console.log(z)
    })

    // $('#form').parsley();
    var newobj={};
    var i=cakes.length;


    $("#submit").click(function () {
        if ($("#form").parsley().validate()) {
            newobj.id=++i;
            newobj.productName=$("#inputText").val();
            newobj.price=$("#inputNumber").val();
            newobj.image=$("#inputImage").val();
            newobj.description=$("#inputDescription").val();
            cakes.push(newobj);
            arrange_array(cakes);
            console.log(cakes)
            swal("Good job!", "Your item is successfully add!", "success");
            return false;
        } else {
            swal("Opps!", "All fields are required!", "error");
        }
    });

    // $('#form').on('submit',function(e){
    //     e.preventdefault();
    //     var form=$(this);
    //     form.parsley().validate();
    //     if(form.parsley().isValid())
    //     {
    //         swal.fire(
    //             'Added successfully',
    //             'New product added successfully',
    //             'success'
    //         )
    //         acceptData();
    //         add.setAttribute('data-bs-dismis','modal');
    //         add.click();
    //         (()=>{
    //             add.setAttribute('data-bs-dismiss',"")
    //         })();
    //     }
    // });

    

});