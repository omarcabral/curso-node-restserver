import { response } from 'express';

const getUsuarios=(req, res=response)=>{
    const query=req.query;

    res.status(200).json({
        msg:'get Api',
        query
    });
}
const postUsuarios=(req, res=response)=>{
    const resp=req.body;
    res.status(201).json({
        msg:'post api',
        resp
    });
}
const putUsuarios=(req, res=response)=>{
    const id=req.params.id;
    res.status(202).json({
        msg:'put api',
        id
    });
}
const deleteUsuarios=(req, res=response)=>{
    res.status(203).json({
        msg:'delete api'
    });
}


export { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios };