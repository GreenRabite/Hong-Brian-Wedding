class AddNullFalse < ActiveRecord::Migration[5.1]
  def change
    change_column :invites, :capacity, :integer, null: false
  end
end
