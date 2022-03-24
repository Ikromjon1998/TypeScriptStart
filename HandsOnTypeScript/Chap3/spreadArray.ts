namespace SpreadArray{
    
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [...a, ...b];// both c and d create new arrays. 
    const d = a.concat(b);//a.push no affext on the 'd after', d statement even though array d was created from arrray a.
    console.log('c before', c);
    console.log('d before', d);
    a.push(10);// has no affest to the following staments
    console.log('a', a);
    console.log('c after', c);
    console.log('d after', d);
    
}