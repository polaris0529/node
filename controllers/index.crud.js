/* api 로직 */


let create = (req,res) => {

};

let read = (req,res) => {

    let { param , query , body } = req;
    
    console.log(query);

    if(query.board){








        res.render('engine');
    }

    


    
    
};

let destroy = (req,res) => {

};

let update = (req,res) => {

};

module.exports = {
    create : create,
    read : read,
    update : update,
    destroy : destroy
}