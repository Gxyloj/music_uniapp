export function formatCount(data){
  let count = parseInt(data)
  if(count > 100000000){
    return (count / 100000000).toFixed(1) + '亿'
  }else if(count > 10000){
    return (count / 10000).toFixed(1) + '万'
  }else{
    return count + ''
  }
}
