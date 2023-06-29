let head = [1,1,2]
function removeDuplicate(head) {
    let obj={};
    for(let i=0;i<head.length;i++){
        if(obj.hasOwnProperty(head[i])){

        }else{
            obj[head[i]]=head[i];
        }
    }
    let result=[];
    for(let item in obj){
        result.push(obj[item])
    }
    return result;
};
console.log(removeDuplicate(head));
