/* document.getElementById('sixteenGB').addEventListener('click', function () {
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 200;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
    updatePrice("memory-cost", 300);
}) */
//8gb memory
// document.getElementById("eightGB").addEventListener('click', function () {
//     updatePrice("memory-cost", 0);

// })
// document.getElementById("ssd3").addEventListener('click', function () {
//     updatePrice("storage-cost", 500);
// })
// document.getElementById("paid-delivery").addEventListener('click', function () {
//     updatePrice("delivery-cost", 20)
// });

function onclick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price)
        document.getElementById(clickId).style.backgroundColor = "cornflowerblue";
    });

}

onclick('sixteenGB', "memory-cost", 300);
onclick("eightGB", "memory-cost", 0);
onclick("ssd1", "storage-cost", 0);
onclick("ssd2", "storage-cost", 200);
onclick("ssd3", "storage-cost", 350);
onclick("free-delivery", "delivery-cost", 0);
onclick("paid-delivery", "delivery-cost", 20);


function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
}
const fackCode = "pHero";
document.getElementById("apply-btn").addEventListener('click', function () {
    const code = document.getElementById("promo-input").value;
    if (code === fackCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice * 20) / 100;

        totalPrice = totalPrice - discount;

        total.innerText = totalPrice;
    } else {

    }
})