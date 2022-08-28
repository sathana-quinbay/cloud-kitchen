export default {
    state : {
        itemFilteredList:[],
        itemlist : [{
            itemname:'chicken briyani',
            price:123,
            category:"non-vegetarian",
            itemtype :"briyani",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:1
        },{
            itemname:'mutton idly',
            price:123,
            category:"non-vegetarian",
            itemtype :"idly",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:2
        },{
            itemname:'prwan briyani',
            price:123,
            category:"non-vegetarian",
            itemtype :"briyani",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:3
        },
        {
            itemname:'mushroom briyani',
            price:123,
            type:"vegetarian",
        itemtype :"briyani",
        category:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            id:6
        },
        {
            itemname:'vegetable briyani',
            price:123,
            category:"vegetarian",
            itemtype :"briyani",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:4
        }
    ]
    },
    getters :{
        getitemlist(state){
            console.log("in get item",state)
            return state.itemlist;
        },
        
        getitemfilteredlist(state){
            return state.itemFilteredList;
        }
    },
    mutations : {
        setitemFilteredList(state,value){
            const filteredArray = state.itemlist.filter((item) => {
                
                return item.itemtype==value;
              });
              console.log(filteredArray)
            state.itemFilteredList = filteredArray
        },
        setitemProduct(state,value)
        {   
            state.itemlist=value
        }
        
    },
    actions : {
        GETITEM_LIST(){
            getProduct({
                success : (response) => {
                    this.commit("setitemProduct",response)
                    console.log("inside store get")
                },
                error : (e) => {
                   alert("error")
                   state.itemlist=[]
                },
            })
           console.log("WORKIng")
        },
        SET_FILTERED_LIST(state,value){
            
            this.commit("setitemFilteredList",value)
            
         },

        
    }
}