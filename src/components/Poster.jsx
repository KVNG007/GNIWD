import React, { useState, useRef } from 'react'
import '../Styles/Poster.scss'
import DropDownPro from '../components/DropDownPro'
import { ArrowButton, IWDLogoWhite } from './Icons';
import Woman from '../assets/20230709_103552.jpg';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { useScreenshot } from 'use-react-screenshot'
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { browserName, CustomView } from 'react-device-detect';
import domtoimage from 'dom-to-image';



const Poster = () => {
  
  const PosterRef = useRef();
  const inputFile = useRef(null);


  const [imageSrc, setImageSrc] = useState(null);
  const [scalee, setscalee] = useState(false);
  
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [resolve, setResolve] = useState('I will help forge a gender equal world');
  const [imageFile, setImageFile] = useState(null);

  const [image, takeScreenshot] = useScreenshot();

  const getImage = () => takeScreenshot(PosterRef.current)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageFile(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById('cover-cover');
    const scale = 2; // Set the scale to 2 for example (you can adjust this as needed)
    
    const canvas = await html2canvas(element, { scale: scale, allowTaint: true, scrollX: 0, scrollY: -window.scrollY });
    const data = canvas.toDataURL('image/jpeg'); // 'jpeg' instead of 'jpg'
    const link = document.createElement('a');
 
    link.href = data;
    link.download = 'downloaded-image.jpg';
 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const domToImg = async () => {
    var node = document.getElementById('cover-cover');

    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const yawaDey = (e) => {
    console.log(e);
    const link = document.createElement("a")
    link.setAttribute("download", "canvas.png")
    link.setAttribute(
      "href",
      document
      .getElementByI("cover-cover")
      // .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
    )
    link.click()
  }


  const DropdownOptions = [
    { value: 'I will help forge a gender equal world', label: 'I will help forge a gender equal world'},
    { value: 'I will challenge gender stereotypes, discrimination & bias', label: 'I will challenge gender stereotypes, discrimination & bias'},
    { value: 'I will forge positive visibility of women', label: 'I will forge positive visibility of women'},
    { value: 'I will maintain an inclusive mindset', label: 'I will maintain an inclusive mindset'},
    { value: 'I will try to inspire others about inclusion', label: 'I will try to inspire others about inclusion'},
    { value: "I will celebrate women's achievements", label: "I will celebrate women's achievements"},
    { value: 'I will call out gendered actions or assumptions', label: 'I will call out gendered actions or assumptions'},
  ];
  
  
  return (
    <>
    <main className='w-full h-max md:h-[750px] grid grid-cols-1 md:grid-cols-2 gap-[5rem]  px-[6%]'>

        <div className="form w-full h-full flex flex-col justify-between xs:mb-10 md:mb-0">
          <div className="relative up flex flex-col xs:gap-6 md:gap-10">
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}
              className='w-full xs:h-[60px] md:h-[80px] text-xl font-Satoshi  border-2 focus:border-3 border-black rounded-md px-4 placeholder:text-black placeholder:text-xl placeholder:font-medium placeholder:font-Satoshi ' placeholder='First name' 
            />

            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}
              className='w-full xs:h-[60px] md:h-[80px] text-xl font-Satoshi  border-2 focus:border-3 border-black rounded-md px-4 placeholder:text-black placeholder:text-xl placeholder:font-medium placeholder:font-Satoshi ' placeholder='Last name' 
            />

            <DropDownPro
              options={DropdownOptions}
              defaultOption={{ value: 'How will you inspire inclusion', label: 'How will you inspire inclusion' }}
              onSelect={(option)=> setResolve(option.value)}
              left
              chevron
            />
          </div>

          <div className="down flex flex-col xs:gap-8 md:gap-10">
            <button type="file" accept="image/*" onClick={onButtonClick}   className='w-full xs:h-[60px] md:h-[85px] px-8 bg-black flex flex-row items-center justify-between text-white xs:text-lg md:text-[30px] font-semibold font-Satoshi' 
            >
              Upload your photo <ArrowButton  className={' xs:w-6 md:w-10'}/>
            </button>

            <input type="file" id='file' accept="image/*" onChange={handleImageChange} className='hidden' ref={inputFile} />
            <a  href ={image} alt={'Screenshot'} className='idden' download={true} id='imagi' />
            <a  src={image} alt={'Screenshot'} className='idden' download={true} id='imagoi' />

            <button type="text"  className='w-full xs:h-[60px] md:h-[85px] px-8 bg-accent focus:bg-brown transition-all duration-300 ease-in-out flex flex-row items-center justify-between text-white xs:text-lg md:text-[30px] font-semibold font-Satoshi' 
              onClick={(e)=> {
                if(!firstName || !lastName ) {
                  return toast.success('Please input your names', 
                    { position: 'bottom-center',
                     duration: 2500,
                     className: 'font-Satoshi font-bold text-[3em]',
                    }
                  )
                }

                else if(!resolve) {
                  return toast.success('Please pick a resolve', 
                    { position: 'bottom-center',
                     duration: 2500,
                    }
                  )
                }

                else {
                  if(window.innerWidth < 480) {
                    // if(browserName == 'Mobile Safari'){
                    //   setscalee(true)
                    // }
                    // if(browserName == 'Mobile Safari') {
                      // handleDownloadImage();
                    //  setTimeout(() => {
                      getImage();
                    //  }, 500);
                      // domToImg()
                      setTimeout(() => {
                        document.getElementById('imagi').click();
                      }, 1200);
                      // setTimeout(() => {
                      //   document.getElementById('imagi').click();
                      //   setscalee(false)
                      // }, 1200);
                    // yawaDey(e);
                  }
                  else {
                    // exportComponentAsJPEG(PosterRef, {fileName: `${firstName}-IWD.jpeg`, backgroundColor: '#00000000'} )  
                    // handleDownloadImage(); 
                    getImage()
                    // domToImg()
                    setTimeout(() => {
                      document.getElementById('imagi').click();
                    }, 1200);
                  }
                }
              }}
            >
              Download your poster <ArrowButton  className={'rotate-180 xs:w-6 md:w-10'}/>
            </button>
          </div>
        </div>

        {/*////////////////////////////////// ds ////////////////////////////*/}

        <div className={`image relative w-full xs:h-[450px] md:h-[750px]`} style={{backgroundImage: `url(${ imageFile ? imageFile : Woman})`}} id='cover-cover' ref={PosterRef} 
          eventSource={document.getElementById("cover-cover")}
          eventPrefix="client"
        >
          <div className={`markings absolute top-0 right-0 w-full h-full flex flex-col items-center justify-between xs:px-4 md:px-10 `}>

            <div className="top-side flex flex-col items-center text-white font-Rufina text-center xs:py-3 md:pt-[30px] md:pb-0 xs:gap-2 md:gap-4">
              <img src="/assets/gui.svg" alt="" className= {`top-g-icon `} />
              
              <h1 className="font-medium font-Rufina xs:leading-7 md:leading-[3.25rem] xs:text-[24px] md:text-[2.8dvw] shadie">SPIRITED NETWORK</h1>
            </div>

            <div className="mid w-full flex flex-col items-end justify-end text-white xs:text-[10px] md:text-sm font-Satoshi font-semibold text-left xs:gap-1 md:gap-2">
              <h6 className=' bg-white text-black xs:px-2 md:px-3 '>#IWD2024</h6>
              
              {/* <h6 className=' bg-accent text-white xs:px-2 md:px-3'>#INSPIREINCLISION</h6> */}
              <img src="/assets/Frame-47.svg" alt="" className=' xs:h-3 md:h-5' />
            </div>

            <div className="bottom-side w-full flex flex-row items-center justify-between text-white xs:mb-[25px] md:mb-[50px]">
              <aside className='flex flex-col xs:gap-[2px] md:gap-[6px]'>
                <h2 className="font-Rufina xs:text-2xl md:text-[2.75em] font-medium xs:leading-6 md:leading-[2.75rem] uppercase mb-1">
                  { firstName || "CHRISTIANAH"} <br />{ lastName || "OGUNYOOLA"}
                </h2>
                <p className='xs:max-w-[95%] xs:text-[8px] md:text-base leading-3 mb-2'>{resolve}</p>
                <div className="linkz flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-1 font-xs">
                    <img src="/assets/Instagram.svg" alt="" className='xs:w-4 md:w-6 xs:h-4 md:h-6' />
                    <img src="/assets/Facebook.svg" alt="" className='xs:w-4 md:w-6 xs:h-4 md:h-6' />
                    <img src="/assets/TwitterX.svg" alt="" className='xs:w-4 md:w-6 xs:h-4 md:h-6' />
                    <img src="/assets/Guinnessngrplc.svg" alt="" className=' xs:h-2 md:h-3' />

                    {/* <small className='xs:text-[8px] md:text-sm'>@guinnessngrplc</small> */}
                  </div>

                  <div className="flex flex-row items-center gap-1">
                    <img src="/assets/LinkedIn.svg" alt="" className='xs:w-4 md:w-6' />
                    <img src="/assets/Guinness-Nigeria.svg" alt="" className=' xs:h-2 md:h-3' />
                    {/* <small className='xs:text-[8px] md:text-sm'>Guinness Nigeria</small> */}
                  </div>
                </div>

              </aside>

              <aside className='h-full flex flex-col items-end justify-end xs:gap-2 md:gap-3'>
                  <div className="flex w-full flex-row items-center gap-2">
                    <img src="/assets/whiteee.svg" alt="" className=' xs:w-5 md:w-8 xs:h-5 md:h-8' />
                    <img src="/assets/IWD2024.svg" alt="" className=' xs:h-2 md:h-3' />
                    {/* <small className=' font-Satoshi font-semibold xs:text-[11px] md:text-[15px] text-white'>IWD2024</small> */}
                  </div>
                <img src="/assets/barcode.svg" alt="" className='xs: w-20 md:w-32' />
              </aside>
            </div>

          </div>

          <hr className='shade' />
        </div>
        
    </main>


    <div className='w-full py-[60px] md:py-[120px] flex flex-col md:flex-row items-center justify-center xs:gap-3 md:gap-6'>        
      <h1 className='font-Satoshi font-black text-black text-[1.25em] leading-[60px] overflow-hidden'>POWERED BY</h1>
      <img src="/assets/GN-Logo.svg" alt='GUINESS LOGO' className='w-40 md:w-40 ' />
    </div>
    </>
  )
}

export default Poster