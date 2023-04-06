export default class InvoiceDto {
    "client": {
        "company": string,
        "address": string,
        "zip": string,
        "city": string,
        "country": string
    };
    "sender": {
        "company": string,
        "address": string,
        "zip": string,
        "city": string,
        "country": string
    };
    "images": {
        //      Logo:
        // 1.   Use a url
        logo: string,
        /*
           2.   Read from a local file as base64
                logo: fs.readFileSync('logo.png', 'base64'),
           3.   Use a base64 encoded image string
                
                Background:
                The same options apply if you would like to add a background.
                We will not use a background in our sample.
           1.   Use a url
                background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
           2.   Read from a local file as base64
                background: fs.readFileSync('images/watermark-draft.jpg', 'base64'),
           3.   Use a base64 encoded image string
                
         */
    };
    "information": {
        // Invoice number
        "number": string,
        // Invoice data
        "date": string,
        // Invoice due date
        //"due-date": "31-12-2021"
    };
    "products": Array<any>;

    // We will use bottomNotice to add a message of choice to the bottom of our invoice
    "bottomNotice": string;

    // Here you can customize your invoice dimensions, currency, tax notation, and number formatting based on your locale
    "settings": {
        "currency": string, // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        /* 
         "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')         
         "tax-notation": "gst", // Defaults to 'vat'
         // Using margin we can regulate how much white space we would like to have from the edges of our invoice
         "margin-top": 25, // Defaults to '25'
         "margin-right": 25, // Defaults to '25'
         "margin-left": 25, // Defaults to '25'
         "margin-bottom": 25, // Defaults to '25'
         "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
         "height": "1000px", // allowed units: mm, cm, in, px
         "width": "500px", // allowed units: mm, cm, in, px
         "orientation": "landscape", // portrait or landscape, defaults to portrait         
         */
    };

    /*
        Last but not least, the translate parameter.
        Used for translating the invoice to your preferred language.
        Defaults to English. Below example is translated to Dutch.
        We will not use translate in this sample to keep our samples readable.
     */
    "translate": {
        /*
         "invoice": "FACTUUR",  // Default to 'INVOICE'
         "number": "Nummer", // Defaults to 'Number'
         "date": "Datum", // Default to 'Date'
         "due-date": "Verloopdatum", // Defaults to 'Due Date'
         "subtotal": "Subtotaal", // Defaults to 'Subtotal'
         "products": "Producten", // Defaults to 'Products'
         "quantity": "Aantal", // Default to 'Quantity'
         "price": "Prijs", // Defaults to 'Price'
         "product-total": "Totaal", // Defaults to 'Total'
         "total": "Totaal" // Defaults to 'Total'        
         */
    };

    /*
        Customize enables you to provide your own templates.
        Please review the documentation for instructions and examples.
        Leave this option blank to use the default template
     */
    "customize": {
        // "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
    };

    constructor(model: any) {
        this.products = [...model.items];
        this.information = {number: model.orderId, date: new Date().toJSON().slice(0, 10)};
        this.client = {
            "company": "Client Corp",
            "address": "Clientstreet 456",
            "zip": "4567 CD",
            "city": "Clientcity",
            "country": "Clientcountry"
        };
        this.sender = {
            "company": "SHO P",
            "address": "Sample Street 123",
            "zip": "1234 AB",
            "city": "Kyiv",
            "country": "Ukraine"
        };
        this.images = {logo: "https://files.cdn.printful.com/files/0af/0af6feb5f6cd456bcb35eabf6f600323_preview.png"};
        this.bottomNotice = "denbgi mne plati";
        this.settings = {currency: "USD"};
    }

}

// let data = {

//     // Let's add a recipient
//     "client": {
//         "company": "Client Corp",
//         "address": "Clientstreet 456",
//         "zip": "4567 CD",
//         "city": "Clientcity",
//         "country": "Clientcountry"
//     },

//     // Now let's add our own sender details
//     "sender": {
//         "company": "SHO P",
//         "address": "Sample Street 123",
//         "zip": "1234 AB",
//         "city": "Kyiv",
//         "country": "Ukraine"
//     },

//     // Of course we would like to use our own logo and/or background on this invoice. There are a few ways to do this.
//     "images": {
//         //      Logo:
//         // 1.   Use a url
//         logo: "https://files.cdn.printful.com/files/0af/0af6feb5f6cd456bcb35eabf6f600323_preview.png",
//         /*
//            2.   Read from a local file as base64
//                 logo: fs.readFileSync('logo.png', 'base64'),
//            3.   Use a base64 encoded image string
                
//                 Background:
//                 The same options apply if you would like to add a background.
//                 We will not use a background in our sample.
//            1.   Use a url
//                 background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
//            2.   Read from a local file as base64
//                 background: fs.readFileSync('images/watermark-draft.jpg', 'base64'),
//            3.   Use a base64 encoded image string
                
//          */
//     },

//     // Let's add some standard invoice data, like invoice number, date and due-date
//     "information": {
//         // Invoice number
//         "number": "2023.0001",
//         // Invoice data
//         "date": new Date().toJSON().slice(0, 10),
//         // Invoice due date
//         //"due-date": "31-12-2021"
//     },

//     // Now let's add some products! Calculations will be done automatically for you.
//     "products": [...items],

//     // We will use bottomNotice to add a message of choice to the bottom of our invoice
//     "bottomNotice": "denbgi mne plati",

//     // Here you can customize your invoice dimensions, currency, tax notation, and number formatting based on your locale
//     "settings": {
//         "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
//         /* 
//          "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')         
//          "tax-notation": "gst", // Defaults to 'vat'
//          // Using margin we can regulate how much white space we would like to have from the edges of our invoice
//          "margin-top": 25, // Defaults to '25'
//          "margin-right": 25, // Defaults to '25'
//          "margin-left": 25, // Defaults to '25'
//          "margin-bottom": 25, // Defaults to '25'
//          "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
//          "height": "1000px", // allowed units: mm, cm, in, px
//          "width": "500px", // allowed units: mm, cm, in, px
//          "orientation": "landscape", // portrait or landscape, defaults to portrait         
//          */
//     },

//     /*
//         Last but not least, the translate parameter.
//         Used for translating the invoice to your preferred language.
//         Defaults to English. Below example is translated to Dutch.
//         We will not use translate in this sample to keep our samples readable.
//      */
//     "translate": {
//         /*
//          "invoice": "FACTUUR",  // Default to 'INVOICE'
//          "number": "Nummer", // Defaults to 'Number'
//          "date": "Datum", // Default to 'Date'
//          "due-date": "Verloopdatum", // Defaults to 'Due Date'
//          "subtotal": "Subtotaal", // Defaults to 'Subtotal'
//          "products": "Producten", // Defaults to 'Products'
//          "quantity": "Aantal", // Default to 'Quantity'
//          "price": "Prijs", // Defaults to 'Price'
//          "product-total": "Totaal", // Defaults to 'Total'
//          "total": "Totaal" // Defaults to 'Total'        
//          */
//     },

//     /*
//         Customize enables you to provide your own templates.
//         Please review the documentation for instructions and examples.
//         Leave this option blank to use the default template
//      */
//     "customize": {
//         // "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
//     },
// };

// const result = await easyinvoice.createInvoice(data);
// await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
// new Date().toJSON().slice(0, 10)