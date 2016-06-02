class AddUserRefToAppointments < ActiveRecord::Migration
  def change
    add_reference :appointments, :user, index: true, foreign_key: true, null: false
    add_column :appointments, :priority, :integer
  end
end
