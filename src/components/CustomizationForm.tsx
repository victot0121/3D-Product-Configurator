import React, { useState } from 'react';

interface FormValues {
  color: string;
  size: string;
  texture: string;
}

const CustomizationForm: React.FC<{ onSubmit: (data: FormValues) => void }> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormValues>({
    color: '#0000ff',
    size: 'Medium',
    texture: 'Smooth',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color:
        <input type="color" name="color" value={formData.color} onChange={handleChange} />
      </label>

      <label>
        Size:
        <select name="size" value={formData.size} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>

      <label>
        Texture:
        <select name="texture" value={formData.texture} onChange={handleChange}>
          <option value="Smooth">Smooth</option>
          <option value="Rough">Rough</option>
          <option value="Matte">Matte</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomizationForm;
