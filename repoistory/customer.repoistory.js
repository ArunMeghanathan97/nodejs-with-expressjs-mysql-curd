const Customer = require('../models/customer.model');

class CustomerRepository{

    CustomerRepository(){}

    create = (request,dataset) => {

        var customer = new Customer();
        console.log("_____________________",request);
        customer.unrams.set({ name : request.name });
        customer.save((errr,resp)=>{
          if ( !errr ){
            dataset({ flg : true , data : resp.model });
            return;
          }else{
            dataset({ flg : false, data : null });
            return;
          }
        });

    }

}

module.exports = CustomerRepository;