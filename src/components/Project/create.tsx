import React, { useState } from 'react';


export interface IProjectOnboardingBasicInfoProps {}

export const ProjectOnboardingBasicInfo = ({
  ...props
}: IProjectOnboardingBasicInfoProps): JSX.Element => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    };
  
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedImage(file);
        setPreviewImage(URL.createObjectURL(file));
      }
    };

  return (

    
    <div >
      
      
      <div
        className="w-[779px] h-[512px] absolute left-[-99px] top-[-76px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 109, 28, 0.35) 0%,rgba(255, 255, 255, 0.00) 100%)",
        }}
      ></div>

      <div
        className="bg-[#e0e0e0] rounded-[0px_20px_20px_0px] w-[390px] h-[670px] absolute left-0 top-[151px] overflow-hidden"
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-[390px] h-[134px] absolute left-0 top-0 overflow-hidden">
          <div className="w-[298px] h-[52px] absolute left-[35px] top-[calc(50%_-_26px)]">
            <img className="w-10 h-10 absolute left-0 top-[calc(50%_-_20px)]" src='/news.png' />
              

            <div
              className="text-[#000000] text-left absolute left-[51px] top-0 w-[247px] h-[23px]"
              style={{ font: "500 28px/24px 'Technor', sans-serif" }}
            >
              Basic Info
            </div>

            <div
              className="text-[#000000] text-left absolute left-[51px] top-[29px] w-[247px] h-[23px]"
              style={{ font: "300 18px/24px 'Rubik', sans-serif" }}
            >
              Provide general details.
            </div>
          </div>
        </div>

        <div className="w-[390px] h-[134px] absolute left-0 top-[134px] overflow-hidden">
          <div className="w-[298px] h-[52px] absolute left-[35px] top-[calc(50%_-_26px)]">
            <div
              className="text-[#000000] text-left absolute left-[51px] top-0 w-[247px] h-[23px]"
              style={{ font: "500 28px/24px 'Technor', sans-serif" }}
            >
              Category &amp; Tags
            </div>

            <div
              className="text-[#000000] text-left absolute left-[51px] top-[29px] w-[247px] h-[23px]"
              style={{ font: "300 18px/24px 'Rubik', sans-serif" }}
            >
              Classify your fundraiser.
            </div>

            <img className="w-10 h-10 absolute left-0.5 top-[calc(50%_-_20px)]"
            src='/tags.png'
            />
             
          </div>
        </div>

        <div className="w-[390px] h-[134px] absolute left-0 top-[268px] overflow-hidden">
          <div className="w-[298px] h-[52px] absolute left-[35px] top-[calc(50%_-_26px)]">
            <div
              className="text-[#000000] text-left absolute left-[51px] top-0 w-[247px] h-[23px]"
              style={{ font: "500 28px/24px 'Technor', sans-serif" }}
            >
              Config
            </div>

            <div
              className="text-[#000000] text-left absolute left-[51px] top-[29px] w-[247px] h-[23px]"
              style={{ font: "300 18px/24px 'Rubik', sans-serif" }}
            >
              Configure your vault.
            </div>

            <img className="w-10 h-10 absolute left-0 top-[calc(50%_-_20px)]"
             src='building-bank.png'
            />
              
          </div>
        </div>

        <div className="w-[390px] h-[134px] absolute left-0 top-[402px] overflow-hidden">
          <div className="w-[298px] h-[52px] absolute left-[35px] top-[calc(50%_-_26px)]">
            <div
              className="text-[#000000] text-left absolute left-[51px] top-0 w-[247px] h-[23px]"
              style={{ font: "500 28px/24px 'Technor', sans-serif" }}
            >
              Contact
            </div>

            <div
              className="text-[#000000] text-left absolute left-[51px] top-[29px] w-[247px] h-[23px]"
              style={{ font: "300 18px/24px 'Rubik', sans-serif" }}
            >
              Provide contact info.
            </div>

            
            
            <img  className="w-10 h-10 absolute left-0 top-[calc(50%_-_20px)]" src='/social.png' />

            
          </div>
        </div>

        <div className="w-[390px] h-[134px] absolute left-0 top-[536px] overflow-hidden">
          <div className="w-[298px] h-[52px] absolute left-[35px] top-[calc(50%_-_26px)]">
            <div
              className="text-[#000000] text-left absolute left-[51px] top-0 w-[247px] h-[23px]"
              style={{ font: "500 28px/24px 'Technor', sans-serif" }}
            >
              Confirm
            </div>

            <div
              className="text-[#000000] text-left absolute left-[51px] top-[29px] w-[247px] h-[23px]"
              style={{ font: "300 18px/24px 'Rubik', sans-serif" }}
            >
              Confirm your options.
            </div>

            <img className="w-10 h-10 absolute left-0 top-[calc(50%_-_20px)]"

            src='/list-details.png'
              

            />
          </div>
        </div>
      </div>

      <div className="w-[1050px] h-[1370px] absolute left-[390px] top-[164px] overflow-hidden">
        <div
          className="text-[#000000] text-center absolute left-[calc(50%_-_438px)] top-[26px] w-[877px] h-[41px]"
          style={{ font: "900 66px/0undefined 'Technor', sans-serif" }}
        >
          <span>
            <span className="gm-let-s-get-you-started-span font-bold text-4xl">
              GM! <br />
            </span>
            <span className="gm-let-s-get-you-started-span2 font-bold text-7xl">
              Let’s get you started.
            </span>
          </span>
        </div>



        

        <div className="w-[716px] h-[138px] absolute left-44 top-[212px]">
        <div
          className="text-[#000000] text-left absolute left-0 top-0 w-[232px] h-[30px]"
          style={{ font: "500 28px/155% 'Rubik', sans-serif" }}
        >
          Fundraiser Name
        </div>

        <div className="bg-[#e0e0e0] rounded-[10px] border-solid border-[#9b9b9b] border w-[716px] h-[52px] absolute left-0 top-[58px] overflow-hidden">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full h-full px-7 py-2 text-[#8f8f8f] text-left text-base font-bold bg-transparent border-none outline-none"
            placeholder="Enter a name..."
          />
        </div>
      </div>

      <div className="w-[716px] h-[138px] absolute left-44 top-[372px]">
        <div
          className="text-[#000000] text-left  left-0 top-0 w-[232px] h-[30px]"
          style={{ font: "500 28px/155% 'Rubik', sans-serif" }}
        >
          Cover Image
        </div>

        <div className="flex items-center mt-3 ">
          <div className="w-[420px] h-[220px] bg-[#e0e0e0] rounded-[10px] border-solid border-[#9b9b9b] border mr-4">
            {previewImage ? (
              <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[#8f8f8f]">Preview</span>
              </div>
            )}
          </div>
          <div className="relative">
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    id="image-upload"
    className="hidden"
  />

 
<label
  htmlFor="image-upload"
  className="text-orange-400 cursor-pointer border min-w-full w-1/2 border-orange-400 border-solid rounded-md flex justify-center items-center"
  style={{ width: '342px', height: '64px' }}
>
  Upload Image
</label>

<div style={{ textAlign: 'center', color: '#8F8F8F', fontSize: 16, fontFamily: 'Rubik',  wordWrap: 'break-word'}}>
    .png,  .jpeg, .gif files up to 8mb.<br/>Recommended size is 1200x450</div>



  {selectedImage && (
    <span className="text-gray-500 ml-2">{selectedImage.name}</span>
  )}
</div>


</div>

<div className="w-[300px] h-[349px] top-[40px] relative">
  
    <div className="w-[232px] h-[30px] left-0 top-0 absolute text-black text-[28px] font-medium leading-[43.40px]">Description</div>
    <div className="h-[164px] pl-[21px] pt-3.5 pb-[123px] left-0 top-[85px] absolute bg-neutral-200 rounded-[10px] border border-neutral-400 justify-start items-center inline-flex">
  <input
    type="text"
    value={description}
    onChange={handleDescriptionChange}
    className="w-[700px] h-[270px] text-neutral-400 text-xl font-medium leading-[31px] outline-none bg-transparent"
    placeholder="Enter a description..."
  />
</div>

    <div className="w-[434px] h-[27px] left-0 top-[37px] absolute text-neutral-600 text-xl font-medium leading-[31px]">Max 2500 characters, markdown supported.</div>
</div>



<div className="w-[716px] h-[138px] relative">
    <div className="w-[260px] h-[30px] left-0 top-0 absolute text-black text-[28px] font-medium leading-[43.40px]">Fundraiser Admins</div>
    <img className="w-8 h-8 left-0 top-[83px] absolute" src="/icon-solana.png" />
    <div className="w-[146px] h-[27px] left-[43px] top-[85px] absolute text-neutral-600 text-xl font-medium leading-[31px]">Zyxw2...MnI9n</div>
    <div className="w-[130px] h-8 left-[203px] top-[85px] absolute">
  <button className="w-[130px] h-8 left-0 top-0 absolute bg-zinc-300 rounded-[15px]">
    <div className="left-[18px] top-[1px] absolute text-orange-500 text-base font-medium leading-normal">+ Add Wallet</div>
  </button>
</div>

   
   
    <div className="w-[663px] h-[27px] left-0 top-[37px] absolute text-neutral-600 text-xl font-medium leading-[31px]">Wallets that can change fundraiser details and initialize withdrawals.</div>
</div>


      </div>

      

  
    </div>
    </div> 
  );
};

export default ProjectOnboardingBasicInfo;