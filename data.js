export const productList = [
    {price: "8.99",image: require('./assets/bake/bake2.png'), title: "Crossbed Bun", availability: true, id: "2", amount: 1, inCart: false},
    {price: "12.99",image: require('./assets/bake/bake3.png'), title: "Cookie Crumble", availability: true, id: "3", amount: 1, inCart: false },
    {price: "6.99",image: require('./assets/bake/cake1.png'), title: "Sweeties Pie", availability: true, id: "4", amount: 1, inCart: false  },
    {price: "9.99",image: require('./assets/bake/cake2.png'), title: "Patty Cakes", availability: true, id: "5", amount: 1, inCart: false  },
    {price: "4.99",image: require('./assets/bake/cake3.png'), title: "Petite Sweets", availability: true, id: "6", amount: 1, inCart: false  }
]

export const recipeList = [
    {id: "2", key: "2", title: "Crossbed Bun", image: require('./assets/bake/bake2.png'), serving: "5", noOfIngredient: "9", 
    ingredient: [
            {amount: "4 cups", name: 'plain flour'},
            {amount: "2 x 7g", name: 'sachets dried yeast'},
            {amount: "1/4 cups", name: 'caster sugar'},
            {amount: "1 1/2 tea spoon", name: 'mixed spice'},
            {amount: "1 1/2 cups", name: 'currants'},
            {amount: "40g", name: 'Lurpak slightly salted butter'},
            {amount: "30ml", name: 'milk'},
            {amount: "2", name: 'eggs, lightly beaten'}
        ],
    instruction: [
            {step: "1", details: "Combine flour, yeast, sugar, mixed spice, salt and currants in a large bowl. Melt butter in a small saucepan over medium heat. Add milk. Heat for 1 minute, or until lukewarm. Add warm milk mixture and eggs to currant mixture. Use a flat-bladed knife to mix until dough almost comes together. Use clean hands to finish mixing to form a soft dough."},
            {step: "2", details: "Turn dough out onto a floured surface. Knead for 10 minutes, or until dough is smooth. Place into a lightly oiled bowl. Cover with plastic wrap. Set aside in a warm, draught-free place for 1 to 1 1/2 hours, or until dough doubles in size."},
            {step: "3", details: "Line a large baking tray with non-stick baking paper. Punch dough down to its original size. Knead for 30 seconds on a lightly floured surface until smooth. Divide into 12 even portions. Shape each portion into a ball. Place balls onto lined tray, about 1cm apart. Cover with plastic wrap. Set aside in a warm, draught-free place for 30 minutes, or until buns double in size. Preheat oven to 190°C or 170˚C fan-force."},
            {step: "4", details: "Make flour paste: Mix flour and water together in a small bowl until smooth, adding a little more water if paste is too thick. Spoon into a small snap-lock bag. Snip off 1 corner of bag. Pipe flour paste over tops of buns to form crosses. Bake for 20 to 25 minutes, or until buns are cooked through."},
            {step: "5", details: "Make glaze: Place water and sugar into a small saucepan over low heat. Stir until sugar dissolves. Bring to theboil. Boil for 3-4 minutes. Brush warm glaze over warm hot cross buns. Serve warm or at room temperature."}
        ]
    },
    {id: "3", key: "3", title: "Cookie Crumble ", image: require('./assets/bake/bake3.png'), serving: "6", noOfIngredient: "8", 
    ingredient: [
            {amount: "1 cup", name: 'all-purpose flour'},
            {amount: "½ cup", name: 'dark cocoa powder'},
            {amount: "½ teaspoon", name: 'baking soda'},
            {amount: "½ cup", name: 'butter, softened'},
            {amount: "⅓ cup", name: 'white sugar'},
            {amount: "⅓ cup", name: 'brown sugar'},
            {amount: "1", name: 'egg'},
            {amount: "½ teaspoon", name: '00000'}
        ],
    instruction: [
            {step: "1", details: "Preheat oven to 350 degrees F (175 degrees C). Grease a baking sheet."},
            {step: "2", details: "Whisk flour, cocoa powder, and baking soda together in a bowl. Beat butter, white sugar, brown sugar, egg, and vanilla extract together with an electric mixer in another bowl until smooth and creamy. Gradually beat flour mixture into butter mixture until dough is just incorporated. Spread dough out onto prepared baking sheet."},
            {step: "3", details: "Bake in the preheated oven until set, about 14 minutes. Cool completely and crumble as desired."}
        ]
    },
    {id: "4", key: "4", title: "Sweeties Pie", image: require('./assets/bake/cake1.png'), serving: "3", noOfIngredient: "4", 
    ingredient: [
            {amount: "3", name: 'large egg whites, at room temperature'},
            {amount: "¾ cup (180ml)", name: 'sugar'},
            {amount: "½ cup (125ml)", name: ' liquid glucose – you can buy liquid glucose from baking stores and pharmacies.'},
            {amount: "½ tsp (2.5ml)", name: 'vanilla extract'}
        ],
    instruction: [
            {step: "1", details: "Place the egg whites, sugar and liquid glucose into a glass bowl and place this over a pot of simmering water."},
            {step: "2", details: "Using an electric hand beater, beat for about 15 minutes or until the meringue is thick and glossy and has reached a temperature of 60°C, using a sugar thermometer."},
            {step: "3", details: " Remove from heat and transfer to another cooler bowl, then add the vanilla extract. Continue to whisk the meringue mixture by hand until it has cooled down completely and increased in volume. You now have marshmallow fluff."},
            {step: "4", details: "Transfer your marshmallow fluff to a sterilised, airtight jar and keep it in the fridge until ready to use. This should keep for up to a week."},
            {step: "5", details: "To go straight onto making your sweetie pies, place some baking paper underneath a cooling rack and spread out the mini round wafers."},
            {step: "6", details: "Fill a piping bag with your home-made marshmallow fluff and carefully pipe rosettes onto each of the mini round wafers. So, starting from the outside, pipe inwards in a concentric circle, lifting the piping bag slightly as you go to create a little tower." },
            {step: "7", details: " Place the chocolate pieces into a glass bowl and set over a pot of simmering water allowing them to melt gently. You can also use a double boiler for this."},
            {step: "8", details: "Once the chocolate has melted, drizzle this over the marshmallow topped wafers, until fully coated."},
            {step: "9", details: "Allow to set by refrigerating them for a couple of minutes."}
        ]
    },
    {id: "5", key: "5", title: "Patty Cakes", image: require('./assets/bake/cake2.png'), serving: "5", noOfIngredient: "6", 
    ingredient: [
            {amount: "1 1/2 Cups", name: 'Self Raising Flour'},
            {amount: "2/3 Cup", name: 'Caster Sugar'},
            {amount: "1 teaspoon", name: 'Vanilla Essence'},
            {amount: "3 eggs", name: 'lightly beaten'},
            {amount: "1/4 cup", name: 'milk'},
            {amount: "125 g", name: 'butter - softened.'}
        ],
    instruction: [
            {step: "1", details: "Preheat your oven to 190 degrees."},
            {step: "2", details: "Line a 12 hole cupcake tin with paper cases."},
            {step: "3", details: "Add all ingredients to the bowl of an electric mixer and beat slowly for 1 minute until the ingredients start to combine. Increase the speed to high and beat for another 3 minutes."},
            {step: "4", details: "Spoon the mixture into paper cases, pop into the oven and bake for approximately 18 minutes or until they are cooked through."},
            {step: "5", details: "Leave the Patty Cakes to cool in the tin for 5 minutes before transferring to a wire rack to cool completely."}
        ]
    },
    {id: "6", key: "6", title: "Petite Sweets", image: require('./assets/bake/cake3.png'), serving: "10", noOfIngredient: "12", 
    ingredient: [
            {amount: "1 and 1/2 cups (3 sticks; 345g)", name: 'unsalted butter, softened to room temperature'},
            {amount: "8 ounce (226g)", name: 'block full-fat cream cheese, softened to room temperature'},
            {amount: "2 cups (400g)", name: 'granulated sugar'},
            {amount: "1/3 cup (80g)", name: 'sour cream, at room temperature'},
            {amount: "1 and 1/2 teaspoons", name: 'pure vanilla extract'},
            {amount: "6 large", name: 'eggs'},
            {amount: "3 cups (345g)", name: 'cake flour (spoon & leveled)'},
            {amount: "1 teaspoon", name: 'baking powder'},
            {amount: "1/8 teaspoon", name: 'salt'},
            {amount: "3 Tablespoons (45ml)", name: 'fresh lemon juice (about 1 lemon)'},
            {amount: "1/4 cup", name: 'raspberry jam'},
            {amount: "1/4 cup (60g)", name: 'lemon curd'}
        ],
    instruction: [
            {step: "1", details: "Preheat oven to 325°F (163°C). Grease a 12×17 inch half sheet pan, then line with parchment paper. Pan size is imperative. This batter won’t fit into anything smaller. Likewise, the cake would be too thin if baked in larger pans."},
            {step: "2", details: "Using a handheld or stand mixer fitted with a paddle or whisk attachment, beat the butter on high speed until smooth and creamy, about 2 minutes. Scrape down the sides and up the bottom of the bowl with a rubber spatula."},
            {step: "3", details: "dd the cream cheese and beat on high speed until completely smooth and combined, about 1 minute. Add the sugar and beat on high speed until combined, about 1 minute, then add the sour cream and vanilla and beat on high speed until combined and creamy. Scrape down the sides and up the bottom of the bowl with a rubber spatula."},
            {step: "4", details: "On low speed, beat the eggs in 1 at a time allowing each to fully mix in before adding the next. Careful not to overmix after the eggs have been added. Once the 6th egg is combined, stop the mixer and add the cake flour, baking powder, and salt. "},
            {step: "5", details: "Beat on medium speed *just* until combined, then beat in the lemon juice. Try not overmix. Using a rubber spatula or sturdy whisk, give the batter a final turn to make sure there are no lumps at the bottom of the bowl. The batter will be thick and creamy."}
        ]
    }
]

