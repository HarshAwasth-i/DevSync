import { useEffect, useState } from "react";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function TeamFormModal({
  open,
  onClose,
  onSubmit,
  member = null,
  loading = false,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        email: member.email,
        role: member.role,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        role: "",
      });
    }
  }, [member, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <Card
 hover={false}
 className="
 w-full
 max-w-lg
 animate-in
 fade-in
 zoom-in
 duration-200
 dark:bg-slate-900
 "
>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {member ? "Edit Team Member" : "Add Team Member"}
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            {member
              ? "Update the team member details."
              : "Fill in the information below to add a new team member."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
          />

          <Input
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Frontend Developer"
            required
          />

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading}>
              {loading
                ? "Saving..."
                : member
                ? "Update Member"
                : "Save Member"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}