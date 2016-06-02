class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|

      t.string :title, null: false
      t.string :company, null: false
      t.string :location, null: false
      t.string :found, null: false

      t.timestamps null: false
    end

  end
end
