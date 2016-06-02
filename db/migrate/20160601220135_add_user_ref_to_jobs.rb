class AddUserRefToJobs < ActiveRecord::Migration
  def change
    add_reference :jobs, :user, index: true, foreign_key: true, null: false
    add_column :jobs, :priority, :integer
  end
end
