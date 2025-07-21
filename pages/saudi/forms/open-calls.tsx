import SpinnerComponent from "@/components/UI/SpinnerComponent";

import Globals from "@/modules/Globals";

import React, { useEffect } from "react";

import GenericData from "@/constants/countryData";
import JsLoader from "@/modules/JsLoader";
import { useRouter } from "next/router";
import { Formpagemodel } from "@/models/formpagemodel";
import Link from "next/link";

interface Props {
  mainsource: string;
  subsource: string;
  CountriesCode: any[];
  CountriesData: any[];
  pageData: Formpagemodel;
  attendAs: string;
}

export default function Page({
  mainsource,
  subsource,
  CountriesCode,
  CountriesData,
  pageData,
  attendAs,
}: Props) {
  useEffect(() => {
    JsLoader.loadFile(`/assets/js/open-calls-saudi.js`);
  }, []);

  if (!pageData) {
    return <SpinnerComponent />;
  }

  const checkRegisteredEmail = () => {
    const email = (window as any)["$"](".field_email").val();
    const confirmEmail = (window as any)["$"]("#confirmEmail").val();
    if (email !== confirmEmail) {
      (window as any)["$"]("#confirmEmailError").css("display", "block");
      (window as any)["$"]("#emailValidate").prop("checked", false);
    } else {
      (window as any)["$"]("#confirmEmailError").css("display", "none");
      (window as any)["$"]("#emailValidate").prop("checked", true);
    }
  };

  const getName = () => {
    let thankyou = (window as any)["$"]("#message").html();
    thankyou = thankyou.replace("[name]", "<span id='UserName'></span>");
    (window as any)["$"]("#message").html(thankyou);
    const name = (window as any)["$"]("#firstname").val();
    (window as any)["$"]("#UserName").html(String(name));
  };

  const changeCheckedStatus = () => {
    const $ = (window as any)["$"];
    if ($("#brochure").prop("checked") === true) {
      $("#field_319Yes").prop("checked", true);
      $("#field_319No").prop("checked", false);
    } else {
      $("#field_319Yes").prop("checked", false);
      $("#field_319No").prop("checked", true);
    }
    if ($("#Sponsorship").prop("checked") === true) {
      $("#field_320Yes").prop("checked", true);
      $("#field_320No").prop("checked", false);
    } else {
      $("#field_320Yes").prop("checked", false);
      $("#field_320No").prop("checked", true);
    }
    if ($("#newsletter").prop("checked") === true) {
      $("#field_322Yes").prop("checked", true);
      $("#field_322No").prop("checked", false);
    } else {
      $("#field_322Yes").prop("checked", false);
      $("#field_322No").prop("checked", true);
    }
  };

  return (
    <div>
      <div className="article-page-wrapper">
        {pageData.bannerimage.value.length > 0 && (
          <Link href="/" className="overflow-hidden ">
            <img
              src={pageData.bannerimage.value[0]?.url}
              alt=""
              className=" aspect-auto"
            />
          </Link>
        )}

        <div className="register-interest-form-wrapper-2026 container mx-auto ">
          <div className="row sm:p-10 ">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <form
                    method="POST"
                    action="//ac.strategic.ae/proc.php"
                    id="_form_450_"
                    className="_form _form_450 _inline-form  _dark"
                    noValidate
                  >
                    <input type="hidden" name="u" value="450" />
                    <input type="hidden" name="f" value="450" />
                    <input type="hidden" name="s" />
                    <input type="hidden" name="c" value="0" />
                    <input type="hidden" name="m" value="0" />
                    <input type="hidden" name="act" value="sub" />
                    <input type="hidden" name="v" value="2" />
                    <input
                      type="hidden"
                      name="or"
                      value="166f6d295cbd6a0c39ea33dd80de25f7"
                    />
                    <input id="emailExist" hidden type="checkbox" />
                    <input id="emailValidate" hidden type="checkbox" />
                    <input type="hidden" name="field[328]" value={mainsource} />
                    <input type="hidden" name="field[329]" value={subsource} />
                    <input
                      type="hidden"
                      name="field[38]"
                      value={pageData.formsubmit.value}
                    />
                    <input
                      type="hidden"
                      name="leadType"
                      value={pageData.leadtype.value}
                    />
                    <div className="_form-content ">
                      <div className=" mb-10">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: pageData.bannerheading.value,
                          }}
                          className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium     leading-tight mb-2"
                        ></div>

                        <div className="py-3">
                          <article
                            className="prose max-w-none   text-black "
                            dangerouslySetInnerHTML={{
                              __html: pageData.bannerdescription.value,
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="_form_element _x98824631 _full_width ">
                          <label>First Name/ الاسم الأول*</label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="firstname"
                              onChange={(e) => {
                                getName();
                              }}
                              name="firstname"
                              className="custom-input"
                              placeholder="First Name*"
                              required
                            />
                          </div>
                        </div>
                        <div className="_form_element _x55410165 _full_width ">
                          <label>Last Name/ اسم الأخير*</label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="lastname"
                              name="lastname"
                              className="custom-input"
                              placeholder=" Last Name*"
                              required
                            />
                          </div>
                        </div>

                        <div className="_form_element _x55410165 _full_width ">
                          <label>Organization Name/ إسم الشركة*</label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="customer_account"
                              name="customer_account"
                              className="custom-input"
                              placeholder=" Organization*"
                              required
                            />
                          </div>
                        </div>

                        <div className="_form_element _x55410165 _full_width ">
                          <label>Email Address/ البريد الإلكتروني*</label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              onChange={(e) => {
                                checkRegisteredEmail();
                              }}
                              id="email"
                              name="email"
                              className="custom-input field_email"
                              placeholder=" Email*"
                              required
                            />
                          </div>
                        </div>

                        <div className="_form_element _x55410165 _full_width ">
                          <label>Confirm Email/ تأكيد البريد الإلكتروني*</label>
                          <div className="_field-wrapper">
                            <input
                              onChange={(e) => {
                                checkRegisteredEmail();
                              }}
                              id="confirmEmail"
                              type="text"
                              className="custom-input"
                              placeholder=" Confirm Email*"
                              required
                            />
                          </div>
                          <div
                            className="_error _below"
                            id="confirmEmailError"
                            style={{ display: "none" }}
                          >
                            <div className="_error-arrow"></div>
                            <div className="_error-inner">Email not match.</div>
                          </div>
                        </div>

                        <div className="_form_element _x55410165 _full_width ">
                          <label>Job Title/ المهنة*</label>
                          <div className="_field-wrapper">
                            <input
                              type="text"
                              id="field[23]"
                              name="field[23]"
                              className="custom-input field_23"
                              placeholder=" Job Title*"
                              required
                            />
                          </div>
                        </div>

                        <div className="_form_element _x55410165 _full_width ">
                          <label>Mobile Number/رقم الهاتف *</label>
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="phone-wrapper">
                                <select
                                  name="phoneCode"
                                  required
                                  className="custom-select"
                                >
                                  <option value="">Code</option>
                                  {CountriesCode.map((code, i) => (
                                    <option key={i} value={code.value}>
                                      {code.label}
                                    </option>
                                  ))}
                                </select>
                                <input
                                  type="number"
                                  name="field[12]"
                                  placeholder="Mobile Phone *"
                                  required
                                  className="custom-input phone"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="_form_element _x55410165 _full_width ">
                          <label>Country/ الدولة*</label>
                          <div className="_field-wrapper">
                            <select
                              name="field[3]"
                              id="field[3]"
                              className="custom-input field_3"
                              required
                            >
                              <option value="">Select Country</option>
                              {CountriesData.map(
                                (country: any, index: number) => {
                                  return (
                                    <option
                                      key={`country-${index}`}
                                      value={country.value}
                                    >
                                      {country.label}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>

                        <div className="_form_element _field159 _full_width hidden">
                          <label>Interests*</label>
                          <fieldset className="_form-fieldset">
                            <input
                              data-autofill="false"
                              type="hidden"
                              id="field[318][]"
                              name="field[318][]"
                              value="~|"
                              className=""
                            />
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Exhibitor"
                                type="checkbox"
                                name="field[318][]"
                                value="Exhibitor"
                                className="any m-r-10"
                                required
                              />
                              <span>
                                <label>Exhibitor</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Sponsor"
                                className="m-r-10"
                                type="checkbox"
                                name="field[318][]"
                                value="Sponsor"
                                defaultChecked={attendAs === "Sponsor"}
                              />
                              <span>
                                <label>Sponsor</label>
                              </span>
                            </div>

                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Speaker"
                                className="m-r-10"
                                type="checkbox"
                                name="field[318][]"
                                value="Speaker"
                                defaultChecked={attendAs === "Speaker"}
                              />
                              <span>
                                <label>Speaker</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Event Partner"
                                className="m-r-10"
                                type="checkbox"
                                name="field[318][]"
                                value="Event Partner"
                              />
                              <span>
                                <label>Event Partner</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Media Partner"
                                className="m-r-10"
                                type="checkbox"
                                name="field[318][]"
                                value="Media Partner"
                              />
                              <span>
                                <label>Media Partner</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Attend Conference / Workshop / Awards / B2B Meetings"
                                className="m-r-10"
                                type="checkbox"
                                name="field[318][]"
                                value="Attend Conference / Workshop / Awards / B2B Meetings"
                              />
                              <span>
                                <label>
                                  Attend Conference / Workshop / Awards / B2B
                                  Meetings
                                </label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_318Visitor"
                                type="checkbox"
                                className="m-r-10"
                                name="field[318][]"
                                value="Visitor"
                              />
                              <span>
                                <label>Visitor</label>
                              </span>
                            </div>
                          </fieldset>
                        </div>

                        <div className="row m-t-15 hidden">
                          <div className="col-12 p-0">
                            <input
                              id="brochure"
                              onChange={(e) => {
                                changeCheckedStatus();
                              }}
                              type="checkbox"
                            />
                            <span>
                              <label className="checkbox-label">
                                Download Brochure/ تحميل البروشور
                              </label>
                            </span>
                          </div>

                          <div className="col-6 hidden">
                            <input
                              id="Sponsorship"
                              onChange={(e) => {
                                changeCheckedStatus();
                              }}
                              type="checkbox"
                            />
                            <span>
                              <label className="checkbox-label">
                                Download Sponsorship Packages
                              </label>
                            </span>
                          </div>

                          <div className="col-12 p-0">
                            <input
                              id="newsletter"
                              onChange={(e) => {
                                changeCheckedStatus();
                              }}
                              type="checkbox"
                            />
                            <span>
                              <label className="checkbox-label">
                                Subscribe to our Newsletter/ اشترك في النشرة
                                الإخبارية الخاصة بنا
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="_form_element _x00956441 _full_width hidden">
                          <fieldset className="_form-fieldset">
                            <div className="_row">
                              <legend className="_form-label">
                                SWS Book Your Stand
                              </legend>
                            </div>
                            <input
                              data-autofill="false"
                              type="hidden"
                              id="field[323][]"
                              name="field[323][]"
                              value="~|"
                            />
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_323Yes"
                                type="checkbox"
                                name="field[323][]"
                                value="Yes"
                              />
                              <span>
                                <label>Yes</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_323No"
                                type="checkbox"
                                name="field[323][]"
                                value="No"
                                defaultChecked
                              />
                              <span>
                                <label>No</label>
                              </span>
                            </div>
                          </fieldset>

                          <fieldset className="_form-fieldset">
                            <div className="_row">
                              <legend className="_form-label">
                                SWS Download Brochure
                              </legend>
                            </div>
                            <input
                              data-autofill="false"
                              type="hidden"
                              id="field[319][]"
                              name="field[319][]"
                              value="~|"
                            />
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_319Yes"
                                type="checkbox"
                                name="field[319][]"
                                value="Yes"
                              />
                              <span>
                                <label>Yes</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_319No"
                                type="checkbox"
                                name="field[319][]"
                                value="No"
                                defaultChecked
                              />
                              <span>
                                <label>No</label>
                              </span>
                            </div>
                          </fieldset>

                          <fieldset className="_form-fieldset">
                            <div className="_row">
                              <legend className="_form-label">
                                SWS Download Sponsorship Packages
                              </legend>
                            </div>
                            <input
                              data-autofill="false"
                              type="hidden"
                              id="field[320][]"
                              name="field[320][]"
                              value="~|"
                            />
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_320Yes"
                                type="checkbox"
                                name="field[320][]"
                                value="Yes"
                              />
                              <span>
                                <label>Yes</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_320No"
                                type="checkbox"
                                name="field[320][]"
                                value="No"
                                defaultChecked
                              />
                              <span>
                                <label>No</label>
                              </span>
                            </div>
                          </fieldset>

                          <fieldset className="_form-fieldset">
                            <div className="_row">
                              <legend className="_form-label">
                                SWS Subscribe to Newsletter
                              </legend>
                            </div>
                            <input
                              data-autofill="false"
                              type="hidden"
                              id="field[322][]"
                              name="field[322][]"
                              value="~|"
                            />
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_322Yes"
                                type="checkbox"
                                name="field[322][]"
                                value="Yes"
                              />
                              <span>
                                <label>Yes</label>
                              </span>
                            </div>
                            <div className="_row _checkbox-radio">
                              <input
                                id="field_322No"
                                type="checkbox"
                                name="field[322][]"
                                value="No"
                                defaultChecked
                              />
                              <span>
                                <label>No</label>
                              </span>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div className="_form_element _x52230745 _full_width py-5">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                        ></div>
                      </div>

                      <div className="_button-wrapper _full_width">
                        <button
                          id="_form_450_submit"
                          className="_submit form-submit bg-primary-saudi text-white px-4 py-3 rounded-2xl"
                          type="submit"
                        >
                          Submit/ إرسال
                        </button>
                      </div>

                      <div className="_clear-element"></div>
                    </div>
                    <div
                      className="_form-thank-you "
                      style={{ display: "none" }}
                    >
                      <div className="py-40" id="message">
                        We’ve received your submission and truly appreciate your
                        interest. Our team will review the information and get
                        back to you shortly if necessary.
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const params = context.query;
  const mainsource = params.mainsource || "Website";
  const subsource = params.subsource || "/";
  const attendAs = params.attend || "";
  const { locale } = context;

  const languageCode = locale === "ar" ? "Arabic" : "default";

  let codename = "";

  if (attendAs === "Speaker") {
    codename = "call_for_speaker__form_saudi";
  } else if (attendAs === "Sponsor") {
    codename = "call_for_sponsor___form_saudi";
  } else null;

  const [CountriesCode, CountriesData] = await Promise.all([
    GenericData.countryCodes(),
    GenericData.countries(),
  ]);

  const datasourceStr: string = await Globals.KontentClient.item(codename)
    .languageParameter(languageCode)
    .withParameter("depth", "4")
    .toObservable()
    .toPromise()
    .then((r: any) => {
      return JSON.stringify(r.item);
    });
  const pageData: Formpagemodel = JSON.parse(datasourceStr);
  return {
    props: {
      mainsource,
      subsource,
      CountriesCode,
      CountriesData,
      pageData,
      attendAs,
    },
  };
}
