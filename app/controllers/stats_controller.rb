class StatsController < ApplicationController
  def index
    @total_guests = Invite.attending_guests
    @invites_sent = Invite.total_guests
    @no_responses = Invite.no_response
    @guest_list = Invite.guest_list
    @recent_updates = Invite.recent_updates(5)
  end
end
