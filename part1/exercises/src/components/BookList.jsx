export default function BookList() {
   let pageTitle = "shrug";
   let book3 = "https://i5.walmartimages.com/seo/A-Court-of-Thorns-and-Roses-A-Court-of-Wings-and-Ruin-Series-3-Paperback-9781635575606_ab58f374-f388-4e15-b0af-231f0df93e6a.2102a869a79b662d9a03deff1917e8f3.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF";
   let book1 = "https://i5.walmartimages.com/seo/A-Court-of-Thorns-and-Roses-A-Court-of-Thorns-and-Roses-Series-1-Paperback-9781635575569_f33e1bfd-6fc9-4fb6-bcbc-b74e0b03e52a.1a7d63ae750c3582cb32133bd48e15f9.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF";
   let book2 = "https://i5.walmartimages.com/seo/A-Court-of-Thorns-and-Roses-A-Court-of-Mist-and-Fury-Series-2-Paperback-9781635575583_e29f5ab2-93d3-4023-9561-4bb14375c330.d863ce924e741186b182d9b2b4748f10.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A court of thorns and roses"/>
         <img src={book2} alt="A court of mist of fury" />
         <img src={book3} alt="A court of wings and ruin" />
      </div>      
   );
}