import { useEffect, useState } from "react";
import api from "../services/api";
import { notify } from "../utils/toast";

import PageHeader from "../components/ui/PageHeader";
import SearchBar from "../components/ui/SearchBar";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import ConfirmModal from "../components/ui/ConfirmModal";
import Button from "../components/ui/Button";

import TeamCard from "../components/team/TeamCard";
import TeamStats from "../components/team/TeamStats";
import TeamFormModal from "../components/team/TeamFormModal";

export default function Teams() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Delete Modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Add/Edit Modal
  const [openForm, setOpenForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    const filtered = members.filter((member) =>
      `${member.name} ${member.email} ${member.role}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredMembers(filtered);
  }, [search, members]);

  const fetchMembers = async () => {
    try {
      setLoading(true);

      const res = await api.get("/teams");

      setMembers(res.data);
      setFilteredMembers(res.data);
    } catch (err) {
      console.error(err);
      notify.error("Failed to load team members.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Add / Edit Member
  // ==========================
  const handleSave = async (formData) => {
    try {
      setSaveLoading(true);

      if (editingMember) {
        await api.put(`/teams/${editingMember.id}`, formData);

        notify.success("Team member updated successfully.");
      } else {
        await api.post("/teams", {
          ...formData,
          created_by: 2, // Replace later with logged-in user ID
        });

        notify.success("Team member added successfully.");
      }

      setOpenForm(false);
      setEditingMember(null);

      fetchMembers();
    } catch (err) {
      console.error(err);

      notify.error(
        err.response?.data?.message || "Failed to save member."
      );
    } finally {
      setSaveLoading(false);
    }
  };

  // ==========================
  // Delete Member
  // ==========================
  const handleDelete = async () => {
    if (!selectedMember) return;

    try {
      setDeleteLoading(true);

      await api.delete(`/teams/${selectedMember.id}`);

      const updated = members.filter(
        (member) => member.id !== selectedMember.id
      );

      setMembers(updated);
      setFilteredMembers(updated);

      notify.success("Team member deleted.");

      setOpenModal(false);
      setSelectedMember(null);
    } catch (err) {
      console.error(err);
      notify.error("Failed to delete member.");
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return <Loader type="skeleton" rows={6} />;
  }

  return (
    <div>
      <PageHeader
        title="Team Members"
        subtitle="Manage your team and collaborators"
        action={
          <Button
            onClick={() => {
              setEditingMember(null);
              setOpenForm(true);
            }}
          >
            + Add Member
          </Button>
        }
      />

      <TeamStats members={members} />

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search team members..."
      />

      {filteredMembers.length === 0 ? (
        <EmptyState
          title="No Team Members"
          message="Add your first team member."
        />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
          {filteredMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onEdit={(member) => {
                setEditingMember(member);
                setOpenForm(true);
              }}
              onDelete={(member) => {
                setSelectedMember(member);
                setOpenModal(true);
              }}
            />
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <TeamFormModal
        open={openForm}
        member={editingMember}
        loading={saveLoading}
        onClose={() => {
          setOpenForm(false);
          setEditingMember(null);
        }}
        onSubmit={handleSave}
      />

      {/* Delete Modal */}
      <ConfirmModal
        open={openModal}
        title="Delete Team Member"
        message="Are you sure you want to remove this team member?"
        loading={deleteLoading}
        onCancel={() => {
          setOpenModal(false);
          setSelectedMember(null);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
}