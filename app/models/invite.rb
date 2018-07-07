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

  def self.guest_list
    result = []
    @invites = Invite.where('attending > 0')
    if @invites
      @invites.each do |invite|
        if invite.plusone && invite.attending >= 2
          result << "#{invite.username} / #{invite.plusone}: #{invite.attending}"
        else
          result << "#{invite.username} : #{invite.attending}"
        end
      end
    end
    result
  end

  def self.no_response
    result = []
    @invites = Invite.where('attending = 0')
    if @invites
      @invites.each do |invite|
        result << invite.username
      end
    end
    result
  end

  def self.recent_updates(num)
    Invite.all.order(updated_at: :desc).limit(num)
  end
end
