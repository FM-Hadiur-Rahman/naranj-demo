import AdminSidebar from "./AdminSidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
