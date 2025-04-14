let hannaShop=[
	{
		group:"Coffee beans",
		name:"Colombian Supremo Coffee",
		price:21.89,
		image:"Images/ColombianSupremoCoffee.jpg"
	},
	{
		group:"Coffee beans",
		name:"Ethiopian Sidamo Coffee",
		price:23.49,
		image:"Images/EthiopianSidamoCoffee.jpg"
	},
	{
		group:"Coffee and Tean Accessories",
		name:"Milk Frother",
		price:13.97,
		image:"Images/MilkFrother.jpg"
	},
	{
		group:"Coffee makers",
		name:"Braun Drip Coffee Maker",
		price:139,
		image:"Images/BraunDripCoffeeMaker.jpg"
	},
];





class Item {  
    constructor(group, name, price, image) {  
        this.group = group;  
        this.name = name;  
        this.price = price;  
        this.image = image;  
    }  

    render() {  
        return `  
            <div class="item ${this.group.replace(/\s+/g, '-').toLowerCase()}">  
                <h4>${this.name}</h4>  
                <img src="${this.image}" alt="${this.name}" />  
                <p>Price: $${this.price.toFixed(2)}</p>  
            </div>  
        `;  
    }  
}  

$(document).ready(function() {  
    let hannaShop = [  
        new Item("Coffee beans", "Colombian Supremo Coffee", 21.89, "Images/ColombianSupremoCoffee.jpg"),  
        new Item("Coffee beans", "Ethiopian Sidamo Coffee", 23.49, "Images/EthiopianSidamoCoffee.jpg"),  
        new Item("Coffee and Tea Accessories", "Milk Frother", 13.97, "Images/MilkFrother.jpg"),  
        new Item("Coffee makers", "Braun Drip Coffee Maker", 139.00, "Images/BraunDripCoffeeMaker.jpg"),  
    ];  

    function generateCheckboxes() {  
        let checkboxesHtml = hannaShop.map((item, index) => `  
            <label class="checkbox-label">  
                <input type="checkbox" class="item-checkbox" data-index="${index}" />  
                ${item.name}  
            </label>  
        `).join('');  
        $('#n_items').html(checkboxesHtml);  
    }  

    function renderSelectedItems() {  
        $('#itemsGallery').empty(); // Clear previous items  
        let selectedItemsHtml = hannaShop  
            .filter((item, index) => $(`.item-checkbox[data-index="${index}"]`).is(':checked'))  
            .map(item => item.render())  
            .join('');  
        $('#itemsGallery').html(selectedItemsHtml);  
        
        // Highlight selected checkboxes  
        $('.checkbox-label').removeClass('checked-checkbox'); // Remove highlight from all  
        $('.item-checkbox:checked').closest('.checkbox-label').addClass('checked-checkbox'); // Highlight checked  
    }  

    // Initial setup  
    generateCheckboxes();  

    // Create and add the toggle text span to the existing h3 element  
    const toggleText = $('<span id="toggleText" style="color: green;">Click to See ...</span>');  
    $('#itemsGroups h3').append(toggleText);  

    // Click event to toggle the view  
    toggleText.on('click', function() {  
        $('#n_items').toggle();  
        const isVisible = $('#n_items').is(':visible');  

        // Update the text and color based on visibility  
        if (isVisible) {  
            $(this).text('Click to Hide ...').css('color', 'red');  
        } else {  
            $(this).text('Click to See ...').css('color', 'green');  
        }  

        // Render items if any checkbox is selected  
        renderSelectedItems();  
    });  

    // Change listener on checkboxes to render selected items  
    $(document).on('change', '.item-checkbox', function() {  
        renderSelectedItems();  
        // Update the message based on checkbox selection  
        const anyChecked = $('.item-checkbox:checked').length > 0;  
        if (anyChecked) {  
            toggleText.text('Click to Hide ...').css('color', 'red');  
        } else {  
            toggleText.text('Click to See ...').css('color', 'green');  
        }  
    });  
});  