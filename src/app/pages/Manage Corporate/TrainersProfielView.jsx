import React, { useEffect, useState } from "react";
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from "../../../_metronic/partials/widgets";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useParams } from "react-router-dom";
import { Dropdown1 } from "../../../_metronic/partials";
import { useNavigate } from "react-router-dom";
export const TrainersProfielView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      name: "Emma Smith",
      avatar: "/media/avatars/300-6.jpg",
      totalExperience: "5 years",
      totalClasses: "350",
      job: "Hatha Yoga",
      online: false,
    },
    {
      id: 2,
      name: "Melody Macy",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "150",
      job: "Vinyasa Yoga",
      online: true,
    },
    {
      id: 3,
      name: "Max Smith",
      avatar: "/media/avatars/300-1.jpg",
      totalExperience: "2 years",
      totalClasses: "90",
      job: "Ashtanga Yoga",
      online: true,
    },
    {
      id: 4,
      name: "Sean Bean",
      avatar: "/media/avatars/300-5.jpg",
      totalExperience: "2 years",
      totalClasses: "150",
      job: "Power Yoga",
      online: true,
    },
    {
      id: 5,
      name: "Brian Cox",
      avatar: "/media/avatars/300-25.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Bikram Yoga",
      online: true,
    },
    {
      id: 6,
      name: "Mikaela Collins",
      color: "warning",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Jivamukti Yoga",
      online: true,
    },
    {
      id: 7,
      name: "Francis Mitcham",
      avatar: "/media/avatars/300-9.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Iyengar Yoga",
      online: true,
    },
    {
      id: 8,
      name: "Olivia Wild",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Anusara Yoga",
      online: true,
    },
    {
      id: 9,
      name: "Neil Owen",
      color: "primary",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Sivananda Yoga",
      online: true,
    },
    {
      id: 10,
      name: "Dan Wilson",
      avatar: "/media/avatars/300-23.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Viniyoga",
      online: true,
    },
    {
      id: 11,
      name: "Emma Bold",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Kundalini Yoga",
      online: true,
    },
    {
      id: 12,
      name: "Ana Crown",
      avatar: "/media/avatars/300-12.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Yin Yoga",
      online: true,
    },
  ];
  const [ProfileData, setProfileData] = useState(null);
  const handelChatClick = () => {
    navigate("chats/");
  };
  useEffect(() => {
    const ProfileDataFilter = Data.filter((el) => {
      return el.id === parseInt(id);
    });
    // console.log("Data =>",ProfileDataFilter)
    setProfileData(ProfileDataFilter[0]);
  }, []);
  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-body pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className="me-7 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                {ProfileData && ProfileData.color ? (
                  <span
                    className={`symbol-label bg-light-${ProfileData.color} text-${ProfileData.color} fs-5 fw-bolder`}
                  >
                    {ProfileData.name.charAt(0)}
                  </span>
                ) : (
                  ProfileData && (
                    <img
                      src={toAbsoluteUrl(`${ProfileData.avatar}`)}
                      alt="Metronic"
                    />
                  )
                )}

                {ProfileData && ProfileData.online ? (
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                ) : (
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-danger rounded-circle border border-4 border-white h-20px w-20px"></div>
                )}
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {ProfileData && ProfileData.name}
                    </a>
                    <a href="#">
                      <KTSVG
                        path="/media/icons/duotune/general/gen026.svg"
                        className="svg-icon-1 svg-icon-primary"
                      />
                    </a>
                  </div>

                  <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                    <a
                      href="#"
                      className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com006.svg"
                        className="svg-icon-4 me-1"
                      />
                      {ProfileData && ProfileData.job}
                    </a>

                    <a
                      href="#"
                      className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com011.svg"
                        className="svg-icon-4 me-1"
                      />
                      {ProfileData && ProfileData.name}@gmail.com
                    </a>

                    <span
                      onClick={handelChatClick}
                      className="d-flex align-items-center text-gray-400 text-hover-primary mb-2 me-3"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com003.svg"
                        className="svg-icon-4 me-1"
                      />
                      Chat
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                          {ProfileData && ProfileData.totalExperience}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">
                        Experience
                      </div>
                    </div>

                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                          {ProfileData && ProfileData.totalClasses}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Classes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            {/* <label className='col-lg-4 fw-bold text-muted'>
              Contact Phone
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label> */}
            {/* 
            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>044 3276 454 935</span>

              <span className='badge badge-success'>Verified</span>
            </div> */}
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Qualification</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
                MSC,PHD
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              City
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">Jaipur</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Country
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">India</span>
            </div>
          </div>


          <div className="row mb-10">
            <label className="col-lg-4 fw-bold text-muted">About</label>

            <div className="col-lg-8">
              <span className="fw-bold fs-6">
                A dedicated Ph.D. and MSc-trained yoga teacher. Balancing
                tradition with modern expertise, specializes in therapeutic
                practices, offering inclusive classes that merge ancient wisdom
                with evidence-based techniques. With a passion for holistic
                well-being, creates a nurturing space for self-discovery and
                healing, tailoring sessions to individual needs. Beyond the mat,
                extends the benefits of yoga through workshops and community
                outreach. Join on a journey toward balance, harmony, and the
                profound well-being that yoga uniquely offers. Namaste 🙏✨
              </span>
            </div>
          </div>

          {/* <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTSVG
              path='icons/duotune/general/gen044.svg'
              className='svg-icon-2tx svg-icon-warning me-4'
            />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                <div className='fs-6 text-gray-600'>
                  Your payment was declined. To start using tools, please
                  <Link className='fw-bolder' to='/crafted/account/settings'>
                    {' '}
                    Add Payment Method
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="row gy-10 gx-xl-10">
        <div className="col-xl-6">
          <ChartsWidget1 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>

        {/* <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div> */}
        <div className="col-xl-6">
          <ListsWidget5 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}
    </>
  );
};