class AddCapacityColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :invites, :capacity, :integer
  end
end
