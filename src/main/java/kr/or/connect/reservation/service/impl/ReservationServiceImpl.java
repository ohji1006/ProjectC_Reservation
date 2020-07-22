package kr.or.connect.reservation.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.or.connect.reservation.dao.ReservationDao;
import kr.or.connect.reservation.dto.Price;
import kr.or.connect.reservation.dto.Reservation;
import kr.or.connect.reservation.service.ReservationService;

@Service
public class ReservationServiceImpl implements ReservationService {
	@Autowired
	private ReservationDao rsvDao;

	@Override
	@Transactional(readOnly = false)
	public Reservation addReservation(Reservation reservation) {
		Date date = new Date();
		reservation.setCreateDate(date);
		reservation.setModifyDate(date);
		reservation.setCancelFlag(false);
		Long rsvId = rsvDao.insertRservationInfo(reservation);
		reservation.setReservationInfoId(rsvId);

		addPriceList(rsvId, reservation.getPrices());

		return reservation;
	}

	private void addPriceList(Long rsvId, List<Price> priceList) {
		priceList.removeIf((Price price) -> isPriceCountInvalid(price));

		for (Price price : priceList) {
			price.setReservationInfoId(rsvId);
			Long rsvPriceId = rsvDao.insertReservationInfoPrice(price);
			price.setReservationInfoPriceId(rsvPriceId);
		}
	}

	public Boolean isPriceCountInvalid(Price price) {
		if (price.getCount() > 0) {
			return false;
		}
		return true;
	}
}
