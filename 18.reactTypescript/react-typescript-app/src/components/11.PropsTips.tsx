//Destructure the props bein the parameter rather than using props
//try to keep the type in diffrent file, ex : Prop.types.tsx
//if there are simpilar types, try to reuse it
   //ex
   type Person = {
   name : Name
   }
   type Name = {
    first : string,
    last : string
   }

   //is ther are arry of persone, then
   type Persons={
    name : Name[]
   }