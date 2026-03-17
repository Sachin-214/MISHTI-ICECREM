import React, { useState } from "react";

const initialState = {
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    pinCode: "",
    businessType: "",
    firmName: "",
    experience: "",
    coldStorage: "",
    message: ""
};

export default function DistributorForm() {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const nextErrors = {};
        if (!formData.fullName.trim()) nextErrors.fullName = "Required";
        if (!formData.mobile.trim()) nextErrors.mobile = "Required";
        if (!formData.email.trim()) nextErrors.email = "Required";
        if (!formData.city.trim()) nextErrors.city = "Required";
        if (!formData.state.trim()) nextErrors.state = "Required";
        if (!formData.pinCode.trim()) nextErrors.pinCode = "Required";
        if (!formData.businessType) nextErrors.businessType = "Required";
        if (!formData.firmName.trim()) nextErrors.firmName = "Required";
        if (!formData.experience) nextErrors.experience = "Required";
        if (!formData.coldStorage) nextErrors.coldStorage = "Required";
        return nextErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate();
        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);
        setFormData(initialState);
    };

    if (submitted) {
        return (
            <div className="form-success">
                Thank you for your interest in Mishti Ice Cream. Our team will
                contact you soon.
            </div>
        );
    }

    return (
        <form className="distributor-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <label className="form-field">
                    Full Name
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                    {errors.fullName && (
                        <span className="form-error">{errors.fullName}</span>
                    )}
                </label>

                <label className="form-field">
                    Mobile Number
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        required
                    />
                    {errors.mobile && (
                        <span className="form-error">{errors.mobile}</span>
                    )}
                </label>

                <label className="form-field">
                    Email Address
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                    />
                    {errors.email && (
                        <span className="form-error">{errors.email}</span>
                    )}
                </label>

                <label className="form-field">
                    City
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        required
                    />
                    {errors.city && (
                        <span className="form-error">{errors.city}</span>
                    )}
                </label>

                <label className="form-field">
                    State
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        required
                    />
                    {errors.state && (
                        <span className="form-error">{errors.state}</span>
                    )}
                </label>

                <label className="form-field">
                    Pin Code
                    <input
                        type="number"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Enter pin code"
                        required
                    />
                    {errors.pinCode && (
                        <span className="form-error">{errors.pinCode}</span>
                    )}
                </label>

                <label className="form-field">
                    Business Type
                    <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Super Stockist">Super Stockist</option>
                    </select>
                    {errors.businessType && (
                        <span className="form-error">
                            {errors.businessType}
                        </span>
                    )}
                </label>

                <label className="form-field">
                    Shop / Firm Name
                    <input
                        type="text"
                        name="firmName"
                        value={formData.firmName}
                        onChange={handleChange}
                        placeholder="Enter shop or firm name"
                        required
                    />
                    {errors.firmName && (
                        <span className="form-error">{errors.firmName}</span>
                    )}
                </label>

                <label className="form-field">
                    Years of Experience
                    <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                    </select>
                    {errors.experience && (
                        <span className="form-error">{errors.experience}</span>
                    )}
                </label>

                <label className="form-field">
                    Message / Business Details
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your business details"
                        rows="4"
                    />
                </label>
            </div>

            <div className="form-field">
                Do you have Cold Storage?
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="coldStorage"
                            value="Yes"
                            checked={formData.coldStorage === "Yes"}
                            onChange={handleChange}
                            required
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="coldStorage"
                            value="No"
                            checked={formData.coldStorage === "No"}
                            onChange={handleChange}
                            required
                        />
                        No
                    </label>
                </div>
                {errors.coldStorage && (
                    <span className="form-error">{errors.coldStorage}</span>
                )}
            </div>

            <button type="submit" className="cta-btn form-submit">
                Submit Application
            </button>
        </form>
    );
}
