'use strict';

var getmember = this.getmember ? (() => { throw new Error (); }) : {};
$ (() => {
  getmember.read = () => {
      $.post ('/api/read', {
        account: $ ('#account').val (),
      }, (data, status) => {
            console.log(data);
            alert(JSON.stringify(data));
      });
    
  };

  getmember.delete = () => {
    $.post ('/api/delete', {
      account: $ ('#account').val (),
    }, (data, status) => {
          console.log(data);
          alert(JSON.stringify(data));
    });
  
};

getmember.update = () => {
    $.post ('/api/update', {
      account: $ ('#account').val (),
      birthday:$ ('#birthday').val (),
      description:$ ('#description').val (),
    }, (data, status) => {
          console.log(data);
          alert(JSON.stringify(data));
    });
  
};

getmember.create = () => {
    $.post ('/api/create', {
      account: $ ('#account').val (),
      birthday:$ ('#birthday').val (),
      description:$ ('#description').val (),
    }, (data, status) => {
          console.log(data);
          alert(JSON.stringify(data));
    });
  
};

});




  