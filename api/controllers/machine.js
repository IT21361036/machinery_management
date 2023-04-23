import Machine from "../models/Machine.js";

export const createMachine = async (req, res,next)=>{
    
    const newMachine = new Machine(req.body)

    try{
        const savedMachine = await newMachine.save()
        res.status(200).json(savedMachine)
    }catch(err){
       next(err);
    }
}

export const updateMachine = async (req, res,next)=>{ 
    try{
        const updatedMachine = await Machine.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updatedMachine)
    }catch(err){
       next(err);
    }
}

export const deleteMachine = async (req, res,next)=>{
    try{
        await Machine.findByIdAndDelete(req.params.id);
        res.status(200).json("Machine has been deleted")
    }catch(err){
       next(err);
    }
}

export const getMachine = async (req, res,next)=>{
    try{
        const machine = await Machine.findById(req.params.id);
        res.status(200).json(machine)
    }catch(err){
       next(err);
    }
}

export const getMachines = async (req, res,next)=>{
  
    //const {min, max, ...others} = req.query

    try{
        const {min, max,limit,  ...others } = req.query;
        const machines = await Machine.find({
            ...others,
            cheapestPrice:{$gt : min | 1 , $lt:max||999},
        }).limit(+limit);
        //const machines = await Machine.find(req.query).limit(+req.query.limit);
        res.status(200).json(machines)
    }catch(err){
       next(err);
    }
}

export const countByCity = async (req, res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Machine.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }catch(err){
       next(err);
    }
}

export const countByType = async (req, res, next) => {
    try {
      const subCount = await Machine.countDocuments({ type: "submachine" });
      const bisCount = await Machine.countDocuments({ type: "biscuits" });
      const cookieCount = await Machine.countDocuments({ type: "cookie" });
      const candyCount = await Machine.countDocuments({ type: "candy" });
      const packageCount = await Machine.countDocuments({ type: "package" });
  
  
      res.status(200).json( [
          { type: "submachine", count: subCount },
          { type: "biscuits", count: bisCount },
          { type: "cookie", count: cookieCount },
          { type: "candy", count: candyCount },
          { type: "package", count: packageCount },
        ]
      );
    } catch (err) {
      next(err);
    }
  };

 






