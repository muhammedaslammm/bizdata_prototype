import { useContext, useRef, useState } from "react";
import { CategoryContext } from "../../contexts";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CategoriesForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [option_submit, set_option_submit] = useState(false);
  const [attribute, setAttribute] = useState({
    label: "",
    field_type: "text",
    options: [],
  });
  const [attributes, setAttributes] = useState([]);
  const [form, setForm] = useState(false);
  const { addCategory } = useContext(CategoryContext);
  const optionsRef = useRef();
  const navigate = useNavigate();

  const submitCategory = async () => {
    if (!categoryName.trim().length)
      return toast.warning("Category name must be added.");
    if (!attributes.length)
      return toast.warning("Category must have atleast one attribute");
    const response = await addCategory({ categoryName, attributes });
    if (response.success) {
      toast.success(response.message);
      navigate("/admin/category-management");
    } else toast.error(response.message);
  };

  const handleAttributes = (field_type, value) => {
    const attributeObject = { ...attribute };
    attributeObject[field_type] = value;
    if (value === "select" || value === "multi-select") {
      attributeObject.options = [];
    }
    console.log("attributes:", attributeObject);
    setAttribute(attributeObject);
  };

  const submitAttribute = () => {
    const { label, field_type, options } = attribute;
    if (label.trim().length === 0)
      return toast.warning("label is required to create attribute");
    if (
      (field_type === "select" || field_type === "multi-select") &&
      options.length < 2
    )
      return toast.warning("Atleast 2 options required in selected field");
    setAttributes([...attributes, attribute]);
    setAttribute({ label: "", field_type: "text", options: [] });
    setCurrentIndex((prev) => (prev += 1));
    setForm(false);
    toast.success("New Attribute Added");
  };

  const submitOptions = () => {
    const attributeObject = { ...attribute };
    const options_string = optionsRef.current.value;
    if (!options_string.trim().length)
      return toast.warning("Cannot submit options without value");
    const new_options = optionsRef.current.value
      .split(",")
      .map((e) => e.trim());
    attributeObject.options = new_options;
    setAttribute(attributeObject);
    set_option_submit(true);
    toast.success("Options Added");
  };

  return (
    <div className="categories__form my-2 ">
      <div className="w-full lg:max-w-[900px] flex flex-col gap-4 md:gap-8 lg:gap-6 ">
        <div className="category__name border border-neutral-300 p-4 rounded-[.5rem] text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] flex items-center flex-wrap sm:flex-col sm:items-start gap-4 sm:gap-1">
          <label htmlFor="" className="capitalize">
            category name :{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Category Name"
            className="border border-neutral-200 py-2 px-3"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        {form ? (
          <div className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] border border-neutral-300 p-4 space-y-8 rounded-[.5rem]">
            <h1 className="capitalize">add attributes</h1>
            <div className="flex justify-between items-end">
              <div className="w-4/6  flex flex-col gap-6 sm:flex-row md:flex-col md:gap-8 lg:gap-12 flex-wrap">
                <div className="top flex flex-wrap gap-3">
                  <div className="label flex flex-col gap-1">
                    <label htmlFor="">Label</label>
                    <input
                      type="text"
                      placeholder="Add label"
                      value={attribute.label}
                      className="border border-neutral-200 py-2 px-3 "
                      onChange={(e) =>
                        handleAttributes("label", e.target.value)
                      }
                    />
                  </div>
                  <div className="type flex flex-col gap-1">
                    <label className="capitalize">type</label>
                    <select
                      name=""
                      id=""
                      value={attribute.field_type}
                      className="border border-neutral-200 py-2 px-3"
                      onChange={(e) =>
                        handleAttributes("field_type", e.target.value)
                      }
                    >
                      <option value="text" className="cursor-pointer">
                        Text
                      </option>
                      <option value="select" className="cursor-pointer">
                        Select
                      </option>
                      <option value="multi-select" className="cursor-pointer">
                        Multi-Select
                      </option>
                    </select>
                  </div>
                </div>
                {attribute.field_type === "select" ||
                attribute.field_type === "multi-select" ? (
                  <div className="options ">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="">
                        Options (add option values with comma separation)
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="text"
                          className="w-[40rem] border border-neutral-300 py-2 px-3 "
                          placeholder="Add Options"
                          onClick={() => set_option_submit(false)}
                          ref={optionsRef}
                        />
                        <button
                          className={`w-[4rem] border ${
                            option_submit
                              ? "border-neutral-200"
                              : "border-neutral-300"
                          } text-neutral-700 disabled:text-neutral-400  disabled:bg-gray-200 cursor-pointer disabled:cursor-not-allowed hover:bg-neutral-100 transition`}
                          disabled={option_submit}
                          onClick={submitOptions}
                        >
                          <i class="fa-solid fa-check text-[1.6rem]"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="">
                <button
                  className="border border-neutral-400 text-[1.2rem] lg:text-[1.3rem] px-3 py-2 rounded-[.2rem] capitalize cursor-pointer hover:bg-neutral-100 transition"
                  onClick={submitAttribute}
                >
                  add attribute
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between border border-neutral-300 p-4 rounded-[.5rem]">
            <p className="w-[40rem] text-[1rem] sm:text-[1.3rem] lg:text-[1.6rem]">
              Click on the '+ Add Attribute' button to add attributes to the
              respective category
            </p>
            <button
              className="text-[1rem] sm:text-[1.3rem] lg:text-[1.4rem] font-medium bg-neutral-700 text-white py-2 px-3 rounded-[.4rem] self-end capitalize cursor-pointer"
              onClick={() => setForm(true)}
            >
              + add attribute
            </button>
          </div>
        )}

        {attributes.length ? (
          <section className="attributes border border-neutral-300 flex flex-col gap-4 p-4 rounded-[.5rem]">
            <h3 className="capitalize text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem]">
              attributes
            </h3>
            {attributes.map((attribute, index) => (
              <section
                className="border border-neutral-300 p-4 rounded-[.2rem] flex justify-between items-center"
                onClick={() =>
                  setCurrentIndex((previndex) =>
                    previndex === index ? attributes.length : index
                  )
                }
              >
                <div className="left flex gap-8">
                  <div className="text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] capitalize">
                    <span>label : </span>
                    <span>{attribute.label}</span>
                  </div>
                  <div
                    className="text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] capitalize
"
                  >
                    <span>field type : </span>
                    <span>{attribute.field_type}</span>
                  </div>
                  {attribute.options.length ? (
                    <div className="text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] capitalize">
                      <span>options: </span>
                      <span>{attribute.options.join(", ")}</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                {index === currentIndex ? (
                  <div className="right w-5 h-5 bg-green-700 rounded-full"></div>
                ) : (
                  <></>
                )}
              </section>
            ))}
          </section>
        ) : (
          <></>
        )}

        <button
          className="self-end bg-green-700 text-white text-[1.15rem] lg:text-[1.25rem] mt-[2rem] py-3 px-3 font-medium rounded-[.2rem] capitalize cursor-pointer"
          onClick={submitCategory}
        >
          create category
        </button>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default CategoriesForm;
