var clustmsg = 'Whether to perform Cluster prediction tasks? ' +
    'After the implementation of the task of all parameters will not be modified, ' +
    'please confirm before the submission of all parameters are accurate.';
var accessmsg = 'Whether to perform assessment tasks? ' +
    'After the implementation of the task of all parameters will not be modified, ' +
    'please confirm before the submission of all parameters are accurate.'
function alertMsg(msg, href) {
    layer.confirm(msg, {
        title: 'Message',
        btn: ['Yes','No'] //按钮
    }, function(){
        window.location.href = href;
    }, function(){
    });
}