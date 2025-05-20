import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { createClient } from "../../utils/supabase/server";

interface Icontact {
  title: string;
  description: string;
  icon: string;
}

const Footer = async () => {
  const supabase = await createClient();

  const { data: contacts } = await supabase.from("contact").select();

  console.log(contacts);

  // const contact = [
  //   {
  //     image: "/Images/telephone.png",
  //     text: "+6011-17757315",
  //   },
  //   {
  //     image: "/Images/mail.png",
  //     text: "sakinah.jusoh@time.com.my",
  //   },
  //   {
  //     image: "/Images/briefcase.svg",
  //     text: "Sakinah Jusoh's Resume",
  //     link: "/Resume Sakinah .pdf",
  //   },
  // ];

  const socialMedia = [
    {
      icon: <Instagram className="w-[30px] h-[30px]" />,
      link: "https://www.instagram.com",
    },
    {
      icon: <Linkedin className="w-[30px] h-[30px]" />,
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <div className="w-full h-40 bg-[#f1f1f1] mt-20">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <div className="font-['Aoboshi_One-Regular'] font-normal text-black text-4xl leading-[39.6px] mr-8">
          SAKINAH JUSOH
        </div>
        <div className="flex flex-row gap-8">
          {contacts?.map((contact: Icontact, index: number) => (
            <div key={index} className="flex flex-row items-center gap-4">
              <img src={contact.icon} className="w-[30px] h-[30px]" />
              {contact.title === "Resume" && contact.description ? (
                <div>
                  <a href={contact.description} target="_blank">
                    <span className="font-['Inter-SemiBold'] font-semibold text-[#00000080] text-xl leading-[30px]">
                      {contact.description}
                    </span>
                  </a>
                </div>
              ) : (
                <span className="font-['Inter-SemiBold'] font-semibold text-[#00000080] text-xl leading-[30px]">
                  {contact.title}
                </span>
              )}
            </div>
          ))}

          <div className="flex flex-row items-center gap-4 ml-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="text-black hover:text-[#ff009d]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex ml-30 py-4">
        <div className="w-6 h-6 mr-4">
          <img src="/Images/copyright.png" alt="Copyright" />
        </div>
        <div className="font-['Inter-SemiBold'] font-semibold text-black text-2xl text-center leading-6">
          2025 BY SAKINAH
        </div>
      </div>
    </div>
  );
};

export default Footer;
