import React from 'react';
function InputNumber({ value, setValue, onSubmit, disabled }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="input-number">
      <input
        type="number"
        min="1"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ingresa tu número"
      />
      <button onClick={onSubmit} disabled={disabled}>
        Enviar
      </button>
    </div>
  );
}

export default InputNumber;