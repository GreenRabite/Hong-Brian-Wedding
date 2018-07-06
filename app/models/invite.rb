class Invite < ApplicationRecord
  def self.attending_guests
    sum = 0
    @invites = Invite.where('attending > 0')
    @invites.each do |invite|
      sum += invite.attending
    end
    sum
  end

  def self.total_guests
    @invites = Invite.all
    sum = 0
    @invites.each do |invite|
      sum += invite.capacity
    end
    sum
  end
end
