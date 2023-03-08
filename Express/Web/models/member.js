const moment = require('moment');
const db = require ('./getDB');
const query = db.query;

exports.read = async (req, res) => {
    var account = req.body.account;
    console.log('account:',account);
    var check = await query (
        'SELECT * from CKDB.user_table WHERE `username` = ? ',[account]
        
        
    );
    console.log("check:",check.length );
    
    
    if (check.length != 0) {
        check['0']['date_of_birth'] = moment(new Date(check['0']['date_of_birth'])).format('YYYY/MM/DD') 
        console.log("check_res:",check );
       

        res.json({
            message:"查詢成功",
            check:check
            
        });
        
    }//if(exits)
    else{
        res.json({
            message:"查無資料",
          });

    };

   
      
}//read

exports.delete = async (req, res) => {
    var account = req.body.account;
    console.log('account:',account);
    var check = await query (
        'DELETE from ckdb.user_table WHERE `username` = ? ',[account]
        
        
    );
    console.log(check);
    if(check. affectedRows != 0){
        return '刪除成功';
    }
    else{return '查無此資料刪除失敗';}

}//delete

exports.update = async (req, res) => {
    var account = req.body.account;
    console.log('account:',account);
    if(account == null || account == ''){return 'Account為空更新失敗'}

    var birthday = req.body.birthday; 
    console.log('birthday:',birthday);

    var description = req.body.description; 
    console.log('description:',description);
    
    if((birthday == null || birthday =='') &&(description!= null && description != '')){
        var check = await query (
            'UPDATE  ckdb.user_table SET `description` = ?  WHERE `username` = ? ',[description,account]
       
            
            
        );
        console.log(check);
        if (check.changedRows != 0){
            return '更新成功';
        }//if(更新成功)
        else{return '更新失敗';}

    }//update description
    
    if((description == null || description =='') &&(birthday!= null && birthday != '')){
        var check = await query (
            'UPDATE  ckdb.user_table SET `date_of_birth` = ?  WHERE `username` = ? ',[birthday,account]
       
            
            
        );
        console.log(check);
        if (check.changedRows != 0){
            return '更新成功';
        }//if(更新成功)
        else{return '更新失敗';}


    }//update birthday

    if((birthday == null || birthday =='') &&(description== null ||description == '')){
        return '生日及描述皆為空更新失敗';

    }// both == null or both == ''

    else{

        var check = await query (
            'UPDATE  ckdb.user_table SET `description` = ?, `date_of_birth` = ?  WHERE `username` = ? ',[description,birthday,account]
       
            
            
        );
        console.log(check);
        if (check.changedRows != 0){
            return '更新成功';
        }//if(更新成功)
        else{return '更新失敗';}


    }// updte both



}//update

exports.create = async (req, res) => {
    var account = req.body.account;
    console.log('account:',account);

    var birthday = req.body.birthday; 
    console.log('birthday:',birthday);

    var description = req.body.description; 
    console.log('description:',description);

    if((account == null || account =='' )||
       (birthday == null|| birthday =='')||
       (description ==null || description=='') ){
        return '資料未齊全';
       }//data not ok 
    else{
        var check = await query (
            'SELECT * from ckdb.user_table WHERE `username` = ? ',[account]
            
            
        );
        console.log("check:",check.length );
        if (check.length != 0) {return '此用戶名已存在';}
        else{
            var insert = await query (
                'INSERT INTO  ckdb.user_table (`username`, `date_of_birth`, `description` )VALUES(?,?,?)',[account,birthday,description]

            );
            console.log(insert);
            if(insert.affectedRows != 0){return '創建成功';}
            else{return '創建失敗';}

        }//else(insert)
           

    }//else(select)
    

}//delete


module.exports = exports;
