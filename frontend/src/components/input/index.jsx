const InputComponent = ({label, placeholder, value, onChange, type}) => {
    return (
        <>
            <label className="form-label">{label}</label>
            <input
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
            />
        </>
    );
};

export default InputComponent;